import express from "express";
import get_some from "./get_some/route.js";
import get_one from "./get_one/route.js";
import get_all_slugs from "./get_all_slugs/route.js";
import get_some_from_one_category from "./get-some-from-one-category/route.js";

const product = express();
product.use("/get-some", get_some);
product.use("/get-one", get_one);
product.use("/get-all-slugs", get_all_slugs);
product.use("/get-some-from-one-category", get_some_from_one_category);

export default product;
