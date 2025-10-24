import express from "express";
import category from "./category/route.js";

const api = express();
api.use("/category", category);

export default api;
