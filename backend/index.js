import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./db/database.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// (Jokes API removed per request)

const startServer = async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.warn(
      "Warning: failed to connect to database — continuing without DB:",
      error.message || error,
    );
  }

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
