import express from "express";
import get_some from "./get_some/route.js";
import get_all from "./get_all/route.js";
import get_all_with_images from "./get_all_with_images/route.js";

const category = express();
category.use("/get-some", get_some);
category.use("/get-all", get_all);
category.use("/get-all-with-images", get_all_with_images);

export default category;
