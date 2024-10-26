import React, { useState, useRef } from "react";

const ImageUpload = ({ output, setOutput }) => {
  const [selectedImage, setSelectedImage] = useState(null); // state to hold the selected image
  const [uploadStatus, setUploadStatus] = useState(""); // state to manage upload status
  const fileInputRef = useRef(null); // ref to access the file input element

  // handle image selection and validation
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // get the selected file
    if (file) {
      // validate file size
      if (file.size > 30 * 1024 * 1024) { // 30MB upload limit
        setUploadStatus("Error: File size exceeds 30MB."); // set error message
        setOutput(""); // clear output if there's an error
        return;
      }
      // validate file type
      if (!["image/jpeg", "image/jpg"].includes(file.type)) {
        setUploadStatus("Error: Unsupported file format. Please upload a JPEG."); // set error message
        setOutput(""); // clear output if there's an error
        return;
      }

      setSelectedImage(URL.createObjectURL(file)); // preview the selected image
      setUploadStatus(""); // clear status message
    } else {
      setSelectedImage(null); // reset selected image if no file is chosen
      setOutput(""); // clear output
    }
  };

  // handle detection process when the button is clicked
  const handleDetect = async () => {
    if (!selectedImage) {
      setUploadStatus("Please select an image before detecting."); // prompt user to select an image
      return;
    }

    const formData = new FormData(); // create FormData object for image upload
    formData.append("image", fileInputRef.current.files[0]); // append the selected image
    setUploadStatus("Detecting..."); // update status to show detection in progress

    try {
      // make a POST request to the API endpoint with the image
      const response = await fetch("/api/claude-ai", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        // Update status with error message or fallback to a default message
        setUploadStatus(errorData.error || "An unknown error occurred.");
        setOutput("");
        return;
      }

      const data = await response.json(); // parse the successful response
      const detectionResult = data.result; // extract the result from the response
      setOutput(detectionResult); // update output with detection result
      setUploadStatus("Ingredient detection successful!"); // update status on success
    } catch (error) {
      console.error("An error occurred while reading the image:", error); // log the error
      setUploadStatus("An unexpected error occurred."); // set generic error message
      setOutput(""); // clear output 
    }
  };

  // render the image upload section
  return (
    <section className="container w-full mx-auto items-center pt-36">
      <div className="max-w-xl mx-0 overflow-hidden align-center"> {/* container for image upload */}
        <div className="flex flex-col gap-4"> {/* vertical flexbox for layout */}
          <div className="relative flex w-full flex-col gap-1"> {/* container for input and status message */}
            <input
              ref={fileInputRef} // reference to access the file input
              id="fileInput"
              type="file"
              className="text-1xl sm:text-2xl w-full border border-blue dark:border-blue-dark bg-blue dark:bg-blue-dark text-white dark:text-white-dark file:mr-4 file:cursor-pointer file:border-none file:bg-white dark:file:bg-white-dark file:px-4 file:py-3 file:font-mono file:text-blue dark:file:text-blue-dark dark:focus-visible:outline-blue" 
              onChange={handleImageChange} // handle image selection
            />
            {uploadStatus && ( // display upload status if it exists
             <small 
             className={`font-mono pt-1 pl-0.5 ${
               uploadStatus.toLowerCase().includes("error") || 
               uploadStatus.includes("Please") ? "text-red dark:text-red-dark" : 
               uploadStatus.includes("successful") ? "text-green dark:text-green-dark" : 
               "text-blue dark:text-blue-dark"
             }`}>
             {uploadStatus} {/* show the current upload status */}
           </small>
            )}
          </div>

          {selectedImage && ( // show the selected image if it exists
            <div className="flex flex-col items-center mt-4">
              <img src={selectedImage} alt="Selected" className="min-h-[50%] max-h-[400px] mx-auto" /> {/* display image preview */}
            </div>
          )}

          <button
            type="button"
            onClick={handleDetect} // handle detection when button is clicked
            disabled={uploadStatus.includes("Error") || uploadStatus === "Detecting..."} // disable button if there's an error or if detecting
            className={`font-mono text-white dark:text-white-dark bg-blue dark:bg-blue-dark hover:bg-black-100 focus:ring-4 focus:outline-none focus:ring-white text-1xl sm:text-2xl px-10 py-5 ${
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