import express from "express";
import db from "../conn.mjs";

// Create an Express router
const router = express.Router();

// GET all users
router.get("/users", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let results = await collection.find({}).limit(50).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new user
router.post("/users", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET user by username
router.get("/users/:username", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let query = { username: req.params.username };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE user by username
router.delete("/users/:username", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let query = { username: req.params.username };
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET user by artistname
router.get("/artist/:artistname", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let query = { artistname: req.params.artistname };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE user by artistname
router.delete("/artist/:artistname", async (req, res) => {
  try {
    const query = { artistname: req.params.artistname };
    const collection = await db.collection("users");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the router
export default router;
