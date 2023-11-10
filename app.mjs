import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.mjs";
import swaggerUI from "swagger-ui-express";
import specification from "./swagger.json" assert { type: "json" };

const app = express();
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specification));

// Load environment variables
dotenv.config();

app.use(cors());
app.use(express.json());

// Load the /users routes
app.use("/", users);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

export default app;
