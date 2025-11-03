import express from "express";
import create from "./create/route.js";
import get_count from "./get_count/route.js";
import update from "./update/route.js";
import deleteBlog from "./delete/route.js";

const blog = express();
blog.use("/create", create)
blog.use("/get-count", get_count)
blog.use("/update", update)
blog.use("/delete", deleteBlog)

export default blog;