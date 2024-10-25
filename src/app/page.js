'use client'
import React from "react";
import ImageUpload from "./components/ImageUpload"; // Adjust the relative path
import ScrollingInstructions from "./components/ScrollingInstructions";

const HomePage = () => {
  return (
    <div>
      {/* "Logo" */}
      <div className="bg-white dark:bg-white-dark flex justify-between w-full p-4">
        <div className="flex items-center">
          <span className="pt-9 text-2xl font-mono dark:text-blue-dark text-blue">Fridge Vision</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-white dark:bg-white-dark h-1/2font-con text-blue dark:text-blue-dark w-full text-center py-8"> 
        <h1 className="text-7xl">
          Discover your
        </h1>
        <h1 className="italic text-9xl">refrigerator's secrets</h1> 
        <h1 className="text-7xl" >
        in a snap
        </h1>
      </div>

      {/* Scrolling Instructions Section */}
      <div className="bg-blue dark:bg-blue-dark ">
        <ScrollingInstructions />
      </div>

      {/** Photo Uploader Section */}
      <div>
        <ImageUpload />
      </div>
    </div>
  );
};

export default HomePage;