'use client'; // enables client-side rendering
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ScrollingInstructions from "./components/ScrollingInstructions";
import IngredientsList from "./components/IngredientsList"; // Import the IngredientsList component

const HomePage = () => {
  const [output, setOutput] = useState(""); // state to hold the output from Claude-AI-API

  return (
    <div className="overflow-x-hidden"> {/* prevent horizontal overflow */}
      
      {/* header section with application title */}
      <div className="bg-white dark:bg-white-dark flex items-center w-full">
        <div className="flex items-center">
          <span className="pt-7 pl-8 text-xl sm:text-2xl font-mono dark:text-blue-dark text-blue">
            Fridge Vision {/* title of the app */}
          </span>
        </div>
      </div>

      {/* title section with large headings */}
      <div className="bg-white dark:bg-white-dark h-[40vh] sm:h-[75vh] w-full text-left pl-4 sm:pl-12 md:pl-24 lg:pl-36 xl:pl-48 flex flex-col justify-center">
        <div className="flex items-center"> 
          <h1 className="text-5xl sm:text-8xl md:text-10xl lg:text-12xl font-con font-bold text-blue dark:text-blue-dark leading-none tracking-tight">
            YOUR {/* first part of the title */}
          </h1>
          <div className="ms-auto mr-14 mb-16 hidden sm:block"> {/* aligns the paragraph to the right */}
            <p className="text-right text-xs sm:text-sm me-auto font-mono text-blue dark:text-blue-dark whitespace-normal max-w-xs">
              An AI-powered ingredient detector that helps 
              you identify the items in your refrigerator or plate
              with a single photo! {/* description of the app */}
            </p>
          </div>
        </div>
        
        {/* second part of the title */}
        <h1 className="text-5xl sm:text-8xl md:text-10xl lg:text-12xl font-bold font-con text-blue dark:text-blue-dark leading-none mt-[-10px] tracking-tight">
          REFRIGERATOR
        </h1>
        
        {/* final part of the title with skew effect */}
        <h1 className="text-5xl sm:text-8xl md:text-10xl lg:text-12xl font-con font-bold text-blue dark:text-blue-dark pr-4 sm:pr-12 md:pr-24 leading-none text-right mt-[-10px] tracking-tight whitespace-nowrap">
          UNC<span style={{ display: 'inline-block', transform: 'skewX(-15deg)' }}>O</span>VERED
        </h1>
      </div>
     
      {/* scrolling instructions section */}
      <div className="bg-blue dark:bg-blue-dark">
        <ScrollingInstructions /> {/* component displaying instructions */}
      </div>
      
      {/* photo uploader and output section */}
      <div className="flex flex-col md:flex-row sm:items-top sm:justify-around bg-white dark:bg-white-dark h-[100vh] w-full">
        <div className="ml-[0vw] sm:ml-[12vw] mt-[4.5vh] w-full md:w-1/2"> {/* uploader on full width for small screens, half on medium and up */}
          <ImageUpload output={output} setOutput={setOutput} /> {/* upload component with output state */}
        </div>

        {/* output display area */}
        <div className="overflow-y-auto flex items-center justify-center w-full"> {/* ensure full width and vertical scrolling if needed */}
          <IngredientsList output={output} /> {/* use IngredientsList component */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;