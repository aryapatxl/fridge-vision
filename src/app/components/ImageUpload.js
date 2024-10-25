import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(""); // For feedback message
  const [filename, setFilename] = useState(""); // To display the file name

  // Handles the file input change  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setFilename(file.name); // Set the filename for display

      const reader = new FileReader();
      reader.onload = (e) => {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.innerHTML = `<img src="${e.target.result}" class="max-h-96 min-w-[200] mx-auto" alt="Image preview" />`;
        imagePreview.classList.remove('border-dashed', 'border-2', 'border-gray-400');
      };
      reader.readAsDataURL(file);
    } else {
      setFilename("");
      setSelectedImage(null);
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
    <section className="container w-full mx-auto items-center py-32">
      <div className="max-w-lg mx-0 bg-white dark:bg-white-dark overflow-hidden">
        <div className="px-4 py-6">
          <form onSubmit={handleSubmit} className="flex flex-col items-start">
            <div id="image-preview" className="w-full p-8 mb-4 border-dashed border-2 border-blue dark:border-blue-dark items-center text-center cursor-pointer">
              <input id="upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} required />
              <label htmlFor="upload" className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-blue dark:text-blue-dark mx-auto mb-4">
                  <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold font-con tracking-tight text-blue dark:text-blue-dark">Upload picture of fridge</h5>
                <p className="font-con text-blue dark:text-blue-dark md:px-6">Choose photo size should be less than <b className="text-blue dark:text-blue-dark">2mb</b></p>
                <p className="font-con text-blue dark:text-blue-dark md:px-6">and should be in <b className="text-blue dark:text-blue-dark">JPG, PNG, or GIF</b> format.</p>
                {filename && <span className="text-blue dark:text-blue-dark z-50">{filename}</span>}
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue dark:bg-blue-dark hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 flex items-center justify-center mr-2 mb-2"
            >
              <span className="font-mono text-center ml-2">Upload</span>
            </button>
          </form>

          {uploadStatus && (
            <div className="mt-4 text-center">
              <p className="text-gray-700">{uploadStatus}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;