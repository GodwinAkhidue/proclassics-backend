import express from "express";
import api from "./api/route.js";
import auth from "./auth/route.js";
import Admin_Shield from "../utils/admin_shield.js";

const admin = express();
admin.use("/api", Admin_Shield, api)
admin.use("/auth", auth)

export default admin;