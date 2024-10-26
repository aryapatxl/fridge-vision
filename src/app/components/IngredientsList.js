// IngredientsList.js: Formats API output into a UI friendly list
import React from 'react';

const IngredientsList = ({ output }) => {
  return (
    <div>
      <a
        href="#"
        className="block mt-4 xl:mt-0 p-5 max-w-lg bg-blue dark:bg-blue-dark overflow-y-auto"
        style={{
          minWidth: "23vw",
          minHeight: "55vh",
          maxHeight: output ? "100vh" : "50vh", // max height to 100vh when output exists, otherwise 50vh
          overflowY: "auto" // vertical scrolling if content overflows
        }}
      >
        <h5 className="text:2xl sm:text-3xl font-con font-bold tracking-tight text-white dark:text-white-dark">
          INGREDIENTS LIST
        </h5>
        <p className={`mt-2 font-mono text-xs sm:text-sm whitespace-pre-line text-white dark:text-white-dark ${output ? 'hidden' : 'opacity-50'}`}>
          Upload a photo of any food! {/* temporary prompt */}
        </p>
        {output && ( // render output if available
          <p className="mt-2 ml-1 flex-grow text-xs sm:text-sm max-h-[100vh] overflow-auto font-mono whitespace-pre-line text-white dark:text-white-dark">
            {output} {/* display the output from the image upload */}
          </p>
        )}
      </a>
    </div>
  );
};

export default IngredientsList;