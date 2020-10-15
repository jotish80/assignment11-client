import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import "./OurWorks.css";
const OurWorks = () => {
  return (
    <main className="carousel-dgn d-flex justify-content-center mb-5 mt-5 ">
      <container className="carousel-size">
        <h3 className="carousel-title">
          Here are some of <span style={{ color: "#7AB259" }}>our works</span>
        </h3>
        <div
          id="carouselExampleIndicators"
          class="carousel slide mt-5"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="text-center carouselStyle">
                <img src={project1} alt="" />
              </div>
            </div>
            <div class="carousel-item">
              <div class="text-center carouselStyle">
                <img src={project2} alt="" />
              </div>
            </div>
            <div class="carousel-item">
              <div class="text-center carouselStyle">
                <img src={project3} alt="" />
              </div>
            </div>
            <div class="carousel-item">
              <div class="text-center carouselStyle">
                <img src={project4} alt="" />
              </div>
            </div>
            <div class="carousel-item">
              <div class="text-center carouselStyle">
                <img src={project4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </container>
    </main>
  );
};

export default OurWorks;
