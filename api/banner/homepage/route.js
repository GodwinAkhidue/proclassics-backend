import express from "express";
import hero from "./hero/route.js";
import one from "./one/route.js";

const homepage = express();
homepage.use("/hero", hero);
homepage.use("/one", one);

export default homepage;
