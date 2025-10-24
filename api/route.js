import express from "express";
import cloudinary from "./cloudinary/route.js";
import category from "./category/route.js";

const api = express();
api.use("/cloudinary", cloudinary)
api.use("/category", category)

export default api;