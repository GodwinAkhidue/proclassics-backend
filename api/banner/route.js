import express from "express";
import homepage from "./homepage/route.js";

const banner = express();
banner.use("/homepage", homepage);

export default banner;
