import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const session = express();
session.get("", (req, res) => {
  const token = req.cookies.adminToken;
  const jwtKey = process.env.JWT_KEY;

  if (!token) {
    return res.status(400).json({ message: "No login" });
  }

  const details = jwt.verify(token, jwtKey);

  if (!details.user) {
    return res.status(400).json({ message: "No login" });
  }

  if (details.user !== process.env.ADMIN_USER) {
    return res.status(400).json({ message: "No login" });
  }

  if (details.user === process.env.ADMIN_USER) {
    return res.status(200).json();
  }
});

export default session;
