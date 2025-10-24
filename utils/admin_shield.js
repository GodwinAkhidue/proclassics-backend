import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function Admin_Shield(req, res, next) {
  const token = req.cookies.adminToken;
  const jwtKey = process.env.JWT_KEY;

  if (!token) {
    return res
      .status(400)
      .json({ message: "Authentication failed, Login to access admin" });
  }

  const details = jwt.verify(token, jwtKey);

  if (!details.user) {
    return res
      .status(400)
      .json({ message: "Authentication failed, Login to access admin" });
  }

  if (details.user !== process.env.ADMIN_USER) {
    return res
      .status(400)
      .json({ message: "Authentication failed, Login to access admin" });
  }

  if (details.user === process.env.ADMIN_USER) {
    next();
  }
}
