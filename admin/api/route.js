import express from "express";
import category from "./category/route.js";
import product from "./product/route.js";

const api = express();
api.use("/category", category);
api.use("/product", product);

export default api;
