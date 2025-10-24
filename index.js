import express from "express";
import create_products_table from "./create_tables/products.js";
import create_categories_table from "./create_tables/categories.js";
import create_banners_table from "./create_tables/banners.js";
import create_blogs_table from "./create_tables/blogs.js";
import admin from "./admin/route.js";
import api from "./api/route.js";

const root = express();

root.use("/admin", admin)
root.use("/api", api)

root.get("/", async (_, res) => {
  const products = await create_products_table();
  const categories = await create_categories_table();
  const banners = await create_banners_table();
  const blogs = await create_blogs_table();

  res.status(200).json({
    products: products ? "success" : "failure",
    categories: categories ? "success" : "failure",
    banners: banners ? "success" : "failure",
    blogs: blogs ? "success" : "failure"
  });
});

export default root;
