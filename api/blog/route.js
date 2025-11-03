import express from "express";
import get_some from "./get_some/route.js";
import get_all_slugs from "./get_all_slugs/route.js";
import get_one from "./get_one/route.js";

const blog = express();
blog.use("/get-some", get_some);
blog.use("/get-all-slugs", get_all_slugs);
blog.use("/get-one", get_one);

export default blog;