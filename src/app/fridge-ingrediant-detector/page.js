'use client'
import React, { useState } from "react";

const ImageUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("/api/claude-ai", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data); // response
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} required />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUploadForm;