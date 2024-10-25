'use client';
import React from "react";
import { useState } from "react";
import ImageUpload from "./components/ImageUpload-Print"; // Adjust the relative path
import ScrollingInstructions from "./components/ScrollingInstructions";

const HomePage = () => {
  const [output, setOutput] = useState("");
  return (
    <div className="overflow-x-hidden"> {/* Removes horizontal overflow for clean UI */}
      {/* "Logo" */}
      <div className="bg-white dark:bg-white-dark flex justify-between w-full p-4">
        <div className="flex items-center">
          <span className="pt-7 pl-8 text-2xl font-mono dark:text-blue-dark text-blue">Fridge Vision</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-white dark:bg-white-dark h-[70vh] w-full text-left pl-4 sm:pl-24 md:pl-48 flex flex-col justify-center">
        <h1 className="sm:text-12xl  font-con font-bold text-blue dark:text-blue-dark leading-none tracking-tight">
          YOUR
        </h1>
        <h1 className="sm:text-12xl font-bold font-con text-blue dark:text-blue-dark leading-none mt-[-10px] tracking-tight">
          REFRIGERATOR
        </h1>
        <h1 className="sm:text-12xl  font-con font-bold text-blue dark:text-blue-dark pr-24 leading-none text-right mt-[-10px] tracking-tight whitespace-nowrap">
    UNC<span style={{ display: 'inline-block', transform: 'skewX(-15deg)' }}>O</span>VERED
</h1>
      </div>

      {/* Scrolling Instructions Section */}
      <div className="bg-blue dark:bg-blue-dark ">
        <ScrollingInstructions />
      </div>

      {/* Photo Uploader Section */}
      <div className="bg-white dark:bg-white-dark h-[70vh] w-full">
      <ImageUpload output={output} setOutput={setOutput} />
      </div>

 
      {output && (
        <div className="mt-4">
          <h2>Detection Result:</h2>
          <p>{output}</p>
        </div>
      )}

    </div>
  );
};

export default HomePage;