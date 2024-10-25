import React, { useState } from "react";


const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(""); // For feedback message

  // Handles the file input change  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Handles the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedImage) {
      setUploadStatus("Please select an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    setUploadStatus("Uploading image...");

    try {
      const response = await fetch("/api/claude-ai", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log(data); // Log the response from Claude AI API

      // Set a success status
      setUploadStatus("Image uploaded successfully! Processing...");
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("An error occurred while uploading the image.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Upload Your Fridge Photo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="mb-4"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Upload Image
        </button>
      </form>

      {uploadStatus && (
        <div className="mt-4 text-center">
          <p className="text-gray-700">{uploadStatus}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;