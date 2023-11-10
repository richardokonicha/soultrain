import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString =
  process.env.MONGO_URL ||
  "mongodb+srv://fugoku:fugoku@flowdb.qagwy8g.mongodb.net=";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("users");

export default db;
