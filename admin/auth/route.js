import express from "express";
import login from "./login/route.js";
import session from "./session/route.js";

const auth = express();
auth.use("/login", login);
auth.use("/session", session);

export default auth;
