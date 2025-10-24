import express from "express";
import upload from "./upload/route.js";
import deleteImage from "./delete/route.js";

const cloudinary = express();
cloudinary.use("/upload", upload);
cloudinary.use("/delete", deleteImage);

export default cloudinary;
