import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ScrollingInstructions() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    
    // responsiveness adjusts according to screen size
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
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {/* 1st Instruction */}
          <div className="card-size">
            <div className="flex items-center bg-blue dark:bg-blue-dark" >
              <h1 className="text-9xl font-mono text-white dark:text-white-dark mr-7">1</h1> {/* mr = right margin */}
              <div className="flex flex-col">
                <p className="font-con font-bold text-white dark:text-white-dark text-5xl mb-2">Take a</p> {/* mb = margin bottom */}
                <p className="font-con font-bold text-white  dark:text-white-dark text-5xl">Picture.</p>
              </div>
          </div>
          </div>

          {/* 2st Instruction */}
          <div className="card-size">
            <div className="flex items-center bg-blue dark:bg-blue-dark" >
              <h1 className="text-9xl font-mono text-white dark:text-white-dark mr-7">2</h1> {/* mr = right margin */}
              <div className="flex flex-col">
                <p className="font-con font-bold text-white dark:text-white-dark text-5xl mb-2">Upload</p> {/* mb = margin bottom */}
                <p className="font-con font-bold text-white  dark:text-white-dark text-5xl">It.</p>
              </div>
          </div>
          </div>

           {/* 3rd Instruction */}
           <div className="card-size">
            <div className="flex items-center bg-blue dark:bg-blue-dark" >
              <h1 className="text-9xl font-mono text-white dark:text-white-dark mr-7">3</h1> {/* mr = right margin */}
              <div className="flex flex-col">
                <p className="font-con font-bold text-white dark:text-white-dark text-5xl mb-2">Press</p> {/* mb = margin bottom */}
                <p className="font-con font-bold text-white  dark:text-white-dark text-5xl">Detect.</p>
              </div>
          </div>
          </div>
        
          {/* 4th Instruction */}
          <div className="card-size">
            <div className="flex items-center bg-blue dark:bg-blue-dark" >
              <h1 className="text-9xl font-mono text-white dark:text-white-dark mr-7">4</h1> {/* mr = right margin */}
              <div className="flex flex-col">
                <p className="font-con font-bold text-white dark:text-white-dark text-5xl mb-2">Review</p> {/* mb = margin bottom */}
                <p className="font-con font-bold text-white  dark:text-white-dark text-5xl">the Results.</p>
              </div>
          </div>
          </div>


          
        </Slider>
      </div>
    </>
  );
}

export default ScrollingInstructions;