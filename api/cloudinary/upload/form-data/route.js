import express from "express";
import { cloudinary_upload } from "../../../../utils/cloudinary.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const form_data = express();

form_data.post(``, upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "No file was uploaded" });
  }

  if (file.size > 5242880) {
    return res.status(400).json({ message: "Image should not exceed 5MB" });
  }

  const response = await cloudinary_upload(file);

  if (response) {
    const file = {
      id: response.public_id,
      url: response.secure_url,
    };

    return res.status(200).json({ file });
  } else {
    return res
      .status(400)
      .json({ message: "Failed to upload file, try again" });
  }
});

export default form_data;
