import { Avatar } from "@material-ui/core";
import React from "react";
import "../ReviewForm/Review.css";

const ReviewDataShow = (props) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid gray",
        padding: "15px",
        height: "200px",

        flexDirection: "column",
        borderRadius: "5px",
        boxShadow: "1px 1px 1px solid gray",
      }}
    >
      <div className="d-flex align-items-center">
        <Avatar
          className="image-size"
          src={props.review.profilePicture}
          alt=""
        />
        <div className="">
          <h6 style={{ fontWeight: "700" }} className="pr-3">
            {props.review.name}
          </h6>
          <h6>{props.review.designation}</h6>
        </div>
      </div>

      <p className="mt-3 text-secondary">{props.review.description}</p>
    </div>
  );
};

export default ReviewDataShow;
