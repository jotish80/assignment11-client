import React from "react";
import app from "../../images/icons/app.png";
import design from "../../images/icons/design.png";
import webdev from "../../images/icons/webdev.png";
import ServicesAvailable from "../ServicesAvailable/ServicesAvailable";

const services = [
  {
    id: 1,
    img: app,
    title: "Web & Mobile design",
    description:
      "We craft stunning and amazing web UI using a well drafted UX to fit your product.",
  },
  {
    id: 2,
    img: design,
    title: "Graphic design",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out. ",
  },
  {
    id: 3,
    img: webdev,
    title: "Web development",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const ProvideServices = () => {
  return (
    <section className="pt-5 mt-5">
      <div>
        <h1 className="text-center">
          Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>
        </h1>
      </div>
      <div className="row pt-5">
        {services.map((services) => (
          <ServicesAvailable services={services} />
        ))}
      </div>
    </section>
  );
};

export default ProvideServices;
