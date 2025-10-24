import cloudinary from "cloudinary";
import { Readable } from "stream";

function bufferToStream(buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export const cloudinary_upload = async (file) => {
  const result = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    bufferToStream(file.buffer).pipe(uploadStream);
  });

  return result;
};

export const cloudinary_delete = async (id) => {
  try {
    const response = await cloudinary.v2.uploader.destroy(id);
    return { response };
  } catch (error) {
    return { error };
  }
};
