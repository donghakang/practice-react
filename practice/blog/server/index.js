import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config({ path: path.join("./", ".env") });

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

const schema = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(CONNECTION_URL, schema)
  .then(() => app.listen(PORT, console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err.message));
