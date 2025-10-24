import express from "express";
import { cloudinary_delete } from "../../../utils/cloudinary.js";

const deleteImage = express();
deleteImage.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await cloudinary_delete(id);

  if (error) {
    return res.status(400).json({ message: "Error deleting image" });
  }

  return res.status(200).json("Image Deleted");
});

export default deleteImage;
