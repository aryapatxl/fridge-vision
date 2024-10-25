'use client'
import React from "react";
import ImageUpload from "./components/ImageUpload"; // Adjust the relative path
import ScrollingInstructions from "./components/ScrollingInstructions";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden"> {/** Removes horizonal overflow for clean UI */}
      {/* "Logo" */}
      <div className="bg-white dark:bg-white-dark flex justify-between w-full p-4">
        <div className="flex items-center">
          <span className="pt-7 pl-8 text-2xl font-mono dark:text-blue-dark text-blue">Fridge Vision</span>
        </div>
      </div>
      {/* Title Section */}
      <div className="bg-white dark:bg-white-dark h-[70vh] w-full text-center py-8 flex flex-col justify-center">
        <h1 className="pb-36 text-7xl font-con text-blue dark:text-blue-dark">
          Discover your
        </h1>
        <h1 className="pb-20 italic text-9xl font-con text-blue dark:text-blue-dark">
          refrigerator's secrets
        </h1>
        <h1 className="text-7xl font-con text-blue dark:text-blue-dark">
          in a snap
        </h1>
      </div>

      {/* Scrolling Instructions Section */}
      <div className="bg-blue dark:bg-blue-dark ">
        <ScrollingInstructions />
      </div>

      {/** Photo Uploader Section */}
      <div className="bg-white dark:bg-white-dark h-[70vh] w-full">
        <ImageUpload />
      </div>
    </div>
  );
};

export default HomePage;