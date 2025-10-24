import express from "express";
import get_some from "./get_some/route.js";

const category = express();
category.use("/get-some", get_some)

export default category;