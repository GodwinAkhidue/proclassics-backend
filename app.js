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

export default root;
