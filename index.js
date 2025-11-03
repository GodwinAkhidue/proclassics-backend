import express from "express";
import create_products_table from "./create_tables/products.js";
import create_categories_table from "./create_tables/categories.js";
import create_banners_table from "./create_tables/banners.js";
import create_blogs_table from "./create_tables/blogs.js";
import admin from "./admin/route.js";
import api from "./api/route.js";
import { create_banner_row_homepage_hero } from "./create_tables/homepage_hero_banner.js";
import { create_banner_row_homepage_1 } from "./create_tables/homepage_banner_1.js";

const root = express();

root.use("/admin", admin);
root.use("/api", api);

root.get("/", async (_, res) => {
  const products = await create_products_table();
  const categories = await create_categories_table();
  const banners = await create_banners_table();
  const blogs = await create_blogs_table();
  const homepage_hero_banner = await create_banner_row_homepage_hero();
  const homepage_banner_1 = await create_banner_row_homepage_1();

  res.status(200).json({
    products: products ? "success" : "failure",
    categories: categories ? "success" : "failure",
    banners: banners ? "success" : "failure",
    blogs: blogs ? "success" : "failure",
    homepage_hero_banner: homepage_hero_banner ? "success" : "failure",
    homepage_banner_1: homepage_banner_1 ? "success" : "failure",
  });
});

export default root;
