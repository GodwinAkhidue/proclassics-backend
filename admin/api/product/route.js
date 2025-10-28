import express from "express";
import create from "./create/route.js";
import get_count from "./get_count/route.js";
import update from "./update/route.js";
import deleteProduct from "./delete/route.js";

const product = express();
product.use("/create", create);
product.use("/get-count", get_count);
product.use("/update", update);
product.use("/delete", deleteProduct);

export default product;
