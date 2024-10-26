import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstructionCard from "./InstructionCard"; // import the InstructionCard component

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
    infinite: false, // disables infinite scrolling
    slidesToShow: 3, // number of slides to show at once
    swipeToSlide: true, // enables swipe to slide
    draggable: true, // enables dragging to slide
    responsive: [ // responsive settings for different screen sizes
      {
        breakpoint: 1024, // for screens <= 1024px
        settings: {
          slidesToShow: 2, // show 2 slides
        },
      },
      {
        breakpoint: 768, // for screens <= 768px
        settings: {
          slidesToShow: 1, // show 1 slide
        },
      },
    ],
  };

  return (
    <div className="slider-container"> {/* container for the slider */}
      <Slider {...settings}> {/* render the Slider component with the defined settings */}
        {instructions.map((instruction, index) => ( // iterate through instructions array
          <InstructionCard
            key={index} // unique key for each instruction card
            stepNumber={instruction.stepNumber} // pass step number prop
            title={instruction.title} // pass title prop
            subtitle={instruction.subtitle} // pass subtitle prop
          />
        ))}
      </Slider>
    </div>
  );
}

export default ScrollingInstructions; // export the ScrollingInstructions component for use in other parts of the app