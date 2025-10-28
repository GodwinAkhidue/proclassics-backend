import express from "express";
import create from "./create/route.js";
import deleteCategory from "./delete/route.js";
import get_count from "./get_count/route.js";
import get_all from "./get_all/route.js";

const category = express();
category.use("/create", create);
category.use("/delete", deleteCategory);
category.use("/get-count", get_count);
category.use("/get-all", get_all);

export default category;
