import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";

export default function Admin() {

  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["fileBase64"] = base64;
      console.log("file stored", base64);
    });
  };

  return (
    <input
      type="file"
      // multiple
      id="imageFile"
      name="imageFile"
      onChange={imageUpload}
    />
  );
}
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
