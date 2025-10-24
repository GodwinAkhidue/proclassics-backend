import express from "express";
import create from "./create/route.js";
import deleteCategory from "./delete/route.js";

const category = express();
category.use("/create", create);
category.use("/delete", deleteCategory);

export default category;
