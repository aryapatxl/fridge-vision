import React, { useState, useRef } from "react";

const ImageUpload = ({ output, setOutput }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const fileInputRef = useRef(null);

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
        throw new Error("Failed to detect image.");
      }

      const data = await response;
      const detectionResult = data.result; // Store the detection output in a variable
      setOutput(detectionResult); // Set the output state to be used in the parent component

      setUploadStatus("Detection successful!"); // Adjust as needed based on response

      // You can use detectionResult variable as needed in your frontend logic

    } catch (error) {
      setUploadStatus("An error occurred while detecting the image.");
      setOutput(""); // Optionally clear the output state
    }
  };

  return (
    <section className="container w-full mx-auto items-center py-32">
      <div className="max-w-lg mx-0 bg-white dark:bg-white-dark overflow-hidden p-8">
        <div className="flex flex-col gap-6">
          <div className={`relative flex w-full max-w-sm flex-col gap-1 ${uploadStatus.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
            <label htmlFor="fileInput" className="w-fit flex items-center gap-1 pl-0.5 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className="w-4 h-4">
                {uploadStatus.startsWith("Error") ? (
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                ) : (
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                )}
              </svg>
              Upload File
            </label>
            <input
              ref={fileInputRef}
              id="fileInput"
              type="file"
              className={`w-full max-w-md overflow-clip rounded-md border ${uploadStatus.startsWith("Error") ? "border-red-500" : "border-green-500"} bg-neutral-50/50 text-sm ${uploadStatus.startsWith("Error") ? "text-red-500" : "text-green-500"} file:mr-4 file:cursor-pointer file:border-none file:bg-neutral-50 file:px-4 file:py-2 file:font-medium file:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-75 dark:bg-neutral-900/50 dark:file:bg-neutral-900 dark:file:text-white dark:focus-visible:outline-white`}
              onChange={handleImageChange}
            />
            {uploadStatus.startsWith("Error") && <small className="pl-0.5">Error: Please choose a file for upload</small>}
          </div>

          {selectedImage && (
            <div className="flex flex-col items-center mt-4">
              <img src={selectedImage} alt="Selected" className="min-h-[40%] max-h-96 mx-auto" />
              <div className="mt-4">
                {uploadStatus.startsWith("Error") && <p className="text-red-600">{uploadStatus}</p>}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleDetect}
            className="text-white bg-blue dark:bg-blue-dark hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-lg px-8 py-4"
          >
            Detect
          </button>

          {uploadStatus && !uploadStatus.startsWith("Error") && (
            <div className="mt-4 text-center">
              <p className={`text-gray-700 ${uploadStatus.startsWith("Error") ? "text-red-600" : "text-green-600"}`}>
                {uploadStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;