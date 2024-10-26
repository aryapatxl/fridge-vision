'use client'; // enables client-side rendering
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload-Print";
import ScrollingInstructions from "./components/ScrollingInstructions";

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
      <div className="bg-white dark:bg-white-dark h-[40vh] sm:h-[70vh] w-full text-left pl-4 sm:pl-12 md:pl-24 lg:pl-36 xl:pl-48 flex flex-col justify-center">
        <div className="flex items-center"> 
          <h1 className="text-5xl sm:text-8xl md:text-10xl lg:text-12xl font-con font-bold text-blue dark:text-blue-dark leading-none tracking-tight">
            YOUR {/* first part of the title */}
          </h1>
          <div className="ms-auto mr-14 mb-16"> {/* aligns the paragraph to the right */}
            <p className="text-right text-xs me-auto sm:text-sm font-mono text-blue dark:text-blue-dark whitespace-normal max-w-xs">
              An AI-powered fridge detector that helps 
              you identify all the items in your refrigerator
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
      <div className="bg-white dark:bg-white-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="ml-10 size-10 bg-white dark:bg-white-dark text-blue dark:text-blue-dark"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>

      {/* scrolling instructions section */}
      <div className="bg-blue dark:bg-blue-dark">
        <ScrollingInstructions /> {/* component displaying instructions */}
      </div>

      {/* photo uploader and output section */}
      <div className="flex flex-col md:flex-row items-top justify-around bg-white dark:bg-white-dark h-[100vh] w-full">
        <div className="ml-[0vw] sm:ml-[12vw] mt-[4.5vh] w-full md:w-1/2"> {/* uploader on full width for small screens, half on medium and up */}
          <ImageUpload output={output} setOutput={setOutput} /> {/* upload component with output state */}
        </div>

        {/* output display area */}
        <div className="overflow-y-auto flex items-center justify-center w-full"> {/* ensure full width and vertical scrolling if needed */}
          <div> 
            <a 
              href="#" 
              className="block p-4 max-w-lg bg-blue dark:bg-blue-dark overflow-y-auto" 
              style={{ minHeight: "500px", maxHeight: output ? "700px" : "200px" }} // set min and max height for the output box
            >
              <h5 className="text-4xl font-con font-bold tracking-tight text-white dark:text-white-dark">
                REFRIGERATOR ITEMS {/* title for the output section */}
              </h5>
              <p className={`mt-2 font-mono text-sm whitespace-pre-line text-white dark:text-white-dark ${output ? 'hidden' : 'opacity-50'}`}>
                Upload a photo of your fridge! {/* temporary prompt for user action */}
              </p>
              {output && ( // render output if available
                <p className="mt-1 ml-1 font-mono whitespace-pre-line text-white dark:text-white-dark">
                  {output} {/* display the output from the image upload */}
                </p>
              )}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;