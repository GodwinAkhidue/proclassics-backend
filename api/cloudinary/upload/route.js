import express from "express";
import form_data from "./form-data/route.js";

const upload = express();
upload.use("/form-data", form_data)

export default upload;