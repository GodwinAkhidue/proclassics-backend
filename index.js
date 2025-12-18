import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import root from "./app.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "https://admin.proclassics.co",
  "https://proclassics.co",
  "https://www.proclassics.co",
  "http://localhost:3000"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      const isAllowed = allowedOrigins.includes(origin);
      callback(null, isAllowed);
    },
    credentials: true,
  })
);

app.use("", root);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on port ${port}`));
