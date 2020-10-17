import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./OurWorks.css";

const OurWorks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="mt-5 carousel">
      <h3 className="text-center text-white mb-4">
        Here are some of <span style={{ color: "#7AB259" }}> our works</span>
      </h3>
      <div className="container">
        <Carousel responsive={responsive}>
          <div className="slide">
            <img className="slide__img" src={project1} alt="" />
          </div>
          <div className="slide">
            <img className="slide__img" src={project2} alt="" />
          </div>
          <div className="slide">
            <img className="slide__img" src={project3} alt="" />
          </div>
          <div className="slide">
            <img className="slide__img" src={project4} alt="" />
          </div>
          <div className="slide">
            <img className="slide__img" src={project5} alt="" />
          </div>
        </Carousel>
        ;
      </div>
    </section>
  );
};

export default OurWorks;
