import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstructionCard from "./InstructionCard";

const instructions = [
  { stepNumber: 1, title: "Take a", subtitle: "Picture." },
  { stepNumber: 2, title: "Upload", subtitle: "It." },
  { stepNumber: 3, title: "Press", subtitle: "Detect." },
  { stepNumber: 4, title: "Review", subtitle: "Results." },
  { stepNumber: 5, title: "Do It", subtitle: "Again." },
];

function ScrollingInstructions() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {instructions.map((instruction, index) => (
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