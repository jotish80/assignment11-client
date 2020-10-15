import React from "react";
import { Link } from "react-router-dom";
import "./ServicesAvailable.css";

const ServicesAvailable = ({ services }) => {
  const { id } = services;
  return (
    <div className=" services col-md-4 text-center">
      <Link to={`/ordersubmitform/${id}`}>
        <img style={{ height: "74px" }} src={services.img} alt="" />
      </Link>
      <h4 className="mt-3 mb-3">{services.title}</h4>
      <p>{services.description}</p>
    </div>
  );
};

export default ServicesAvailable;
