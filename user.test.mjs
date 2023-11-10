import request from "supertest";
import { assert } from "chai";
import express from "express";
import router from "./routes/users.mjs";
import app from "./app.mjs";

app.use(express.json());
app.use("/", router);

describe("User Routes", () => {
  describe("GET /users", () => {
    it("should get all users", async () => {
      const response = await request(app).get("/users");
      assert.equal(response.status, 200);
      assert.isArray(response.body);
    });
  });
  describe("POST /users", () => {
    it("should create a new user", async () => {
      const newUser = {
        username: "yuno",
        artistname: "dj_yuno",
        email: "yuni.doe@example.com",
        password: "password123"
      };
      const response = await request(app).post("/users").send(newUser);
      assert.equal(response.status, 200);
      assert.isTrue(response.body.acknowledged);
    });
  });
  describe("GET /users/:username", () => {
    it("should get user by username", async () => {
      const response = await request(app).get("/users/yuno");
      assert.equal(response.status, 200);
      const user = response.body;
      console.log("Retrieved User:", user);
      assert.property(user, "username");
      assert.equal(user.username, "yuno");
    });
  });
  describe("DELETE /users/:username", () => {
    it("should delete user by username", async () => {
      const response = await request(app).delete("/users/yuno");
      assert.equal(response.status, 200);
      const deletionResult = {
        acknowledged: true,
        deletedCount: 1
      };
      assert.deepEqual(response.body, deletionResult);
    });
  });

  describe("POST /users", () => {
    it("should create a new user", async () => {
      const newUser = {
        username: "rich",
        artistname: "dj_rich",
        email: "rich.doe@example.com",
        password: "password123"
      };
      const response = await request(app).post("/users").send(newUser);
      assert.equal(response.status, 200);
      assert.isTrue(response.body.acknowledged);
    });
  });
  describe("GET /artist/:artistname", () => {
    it("should get user by artistname", async () => {
      const response = await request(app).get("/artist/dj_rich");
      assert.equal(response.status, 200);
      assert.property(response.body, "artistname");
    });
  });
  describe("DELETE /artists/:artistname", () => {
    it("should delete user by artistname", async () => {
      const response = await request(app).delete("/artist/dj_rich");
      assert.equal(response.status, 200);
      const deletionResult = {
        acknowledged: true,
        deletedCount: 1
      };
      assert.deepEqual(response.body, deletionResult);
    });
  });
});
