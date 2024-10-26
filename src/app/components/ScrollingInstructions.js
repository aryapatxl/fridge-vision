// ScrollingInstructions.js: creates cards using InstructionCard.js and puts them into a carousel
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstructionCard from "./InstructionCard";

// array of instructions with step numbers, titles, and subtitles
const instructions = [
  { stepNumber: 1, title: "Take a", subtitle: "Picture." },
  { stepNumber: 2, title: "Upload", subtitle: "It." },
  { stepNumber: 3, title: "Press", subtitle: "Detect." },
  { stepNumber: 4, title: "Review", subtitle: "Results." },
  { stepNumber: 5, title: "Do It", subtitle: "Again." },
];

function ScrollingInstructions() {
  // settings for the slick carousel
  const settings = {
    infinite: false, // prevents infinite scrolling
    slidesToShow: 3, // shows three slides at once
    swipeToSlide: true, // enables swipe functionality
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // shows two slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // shows one slide on smaller screens
        },
      },
    ],
  };

  return (
    // container for the slider to encapsulate styling
    <div className="slider-container">
      <Slider {...settings}>
        {instructions.map((instruction, index) => ( // create individual cards
          <InstructionCard
            key={index}
            stepNumber={instruction.stepNumber}
            title={instruction.title}
            subtitle={instruction.subtitle}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ScrollingInstructions;