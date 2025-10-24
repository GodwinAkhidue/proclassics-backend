import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const login = express();
login.post("", (req, res) => {
  const { user, password } = req.body;

  if (
    user === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const jwtKey = process.env.JWT_KEY;
    const adminToken = jwt.sign({ user }, jwtKey, { expiresIn: "24h" });

    res.cookie("adminToken", adminToken, {
      httpOnly: true,
      secure: true,
    //   sameSite: "None",
    //   domain: ".proclassics.co",
    //   path: "/",
      maxAge: 1000 * 60 * 60 * 24, //24hrs in milliseconds
    });

    return res.status(200).json({})
  } else {
    return res.status(400).json({message: "Invalid name or password"})
  }
});

export default login;
