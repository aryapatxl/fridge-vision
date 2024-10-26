import React from "react";

// Instruction card component
const InstructionCard = ({ stepNumber, title, subtitle }) => (
  <div className="card-size">
    <div className="py-10 pl-12 flex items-center bg-blue dark:bg-blue-dark">
      <h1 className="text-7xl my-7 sm:text-15xl font-mono text-white dark:text-white-dark mr-2">{stepNumber}</h1>
      <div className="flex flex-col">
        <p className="font-con font-bold text-white dark:text-white-dark text-3xl sm:text-7xl mb-2">{title}</p>
        <p className="font-con font-bold text-white dark:text-white-dark text-3xl sm:text-7xl">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default InstructionCard;