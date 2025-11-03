import express from "express";
import cloudinary from "./cloudinary/route.js";
import category from "./category/route.js";
import product from "./product/route.js";
import banner from "./banner/route.js";
import blog from "./blog/route.js";

const api = express();
api.use("/cloudinary", cloudinary)
api.use("/category", category)
api.use("/product", product)
api.use("/banner", banner)
api.use("/blog", blog)

export default api;