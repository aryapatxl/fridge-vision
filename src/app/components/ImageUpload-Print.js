import React, { useState, useRef } from "react";

const ImageUpload = ({ output, setOutput }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const fileInputRef = useRef(null);

  // Picture uploading
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 30 * 1024 * 1024) { // 30MB upload limit
        setUploadStatus("Error: File size exceeds 30MB.");
        setOutput("");
        return;
      }
      if (!["image/jpeg", "image/jpg"].includes(file.type)) {
        setUploadStatus("Error: Unsupported file format. Please upload a JPEG.");
        setOutput("");
        return;
      }

      setSelectedImage(URL.createObjectURL(file));
      setUploadStatus("");
    } else {
      setSelectedImage(null);
      setOutput("");
    }
  };

  // Detect button
  const handleDetect = async () => {
    if (!selectedImage) {
      setUploadStatus("Please select an image before detecting.");
      return;
    }

    const formData = new FormData();
    formData.append("image", fileInputRef.current.files[0]);
    setUploadStatus("Detecting...");

    try {
      const response = await fetch("/api/claude-ai", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.text();
        setUploadStatus(errorData); // Set the error message to uploadStatus
        return; // Exit early on error
      }

      const data = await response.json();
      const detectionResult = data.result;
      setOutput(detectionResult);

      setUploadStatus("Ingredient detection successful!");
    } catch (error) {
      console.error("An error occurred while reading the image:", error);
      setUploadStatus("An unexpected error occurred.");
      setOutput(""); 
    }
  };

  // form courtesy of Tailwind CSS
  return (
    <section className="container w-full mx-auto items-center pt-36">
      <div className="max-w-lg mx-0 overflow-hidden align-center">
        <div className="flex flex-col gap-4">
          <div className="relative flex w-full max-w-lg flex-col gap-1">
            <input
              ref={fileInputRef}
              id="fileInput"
              type="file"
              className="text-lg w-full max-w-lg overflow-wrap dark:border-blue-dark border border-blue bg-blue dark:bg-blue-dark  text-white dark:text-white-dark file:mr-4 file:cursor-pointer file:border-none file:bg-white dark:file:bg-white-dark file:px-4 file:py-2 file:font-mono file:text-blue dark:file:text-blue-dark dark:focus-visible:outline-blue"
              onChange={handleImageChange}
            />
            {/* Conditionals for message coloring */}
            {uploadStatus && (
            <small 
              className={`font-mono pt-1 pl-0.5 ${
                uploadStatus.includes("Error" || "Please") ? "text-red dark:text-red-dark" : 
                uploadStatus.includes("successful") ? "text-green dark:text-green-dark" : 
                // default
                "text-blue dark:text-blue-dark"
              }`}>
              {uploadStatus}
            </small>
            )}
          </div>

          {/** Picked Photo Display */}
          {selectedImage && (
            <div className="flex flex-col items-center mt-4">
              <img src={selectedImage} alt="Selected" className="min-h-[50%] max-h-96 mx-auto" />
            </div>
          )}

          {/* Detect Button */}
          <button
            type="button"
            onClick={handleDetect}
            // Disable the button if there is an error, picture is not the right format or if it the POST req was already made
            disabled={uploadStatus.includes("Error") || uploadStatus === "Detecting..."}
            className={`font-mono text-white dark:text-white-dark bg-blue dark:bg-blue-dark hover:bg-black-100 focus:ring-4 focus:outline-none focus:ring-white text-lg px-8 py-4 ${
              uploadStatus.includes("Error") || uploadStatus === "Detecting..." ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Detect
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;