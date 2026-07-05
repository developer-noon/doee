import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./db/database.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const jokes = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    joke: "What do you call a fake noodle? An impasta!",
  },
];

app.get("/api", (req, res) => {
  res.json({ jokes });
});

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
