import { Avatar } from "@material-ui/core";
import React from "react";

const ClientFeedbackDetails = ({ feedback }) => {
  return (
    <div style={{ border: "1px solid gray" }} className="col-md-4">
      <div style={{ padding: "0px 5px", height: "100px" }} className="d-flex">
        <Avatar style={{ height: "60px", width: "60px" }} src={feedback.img} />
        <div>
          <h4>{feedback.name}</h4>
          <h5>{feedback.title}</h5>
        </div>
      </div>
      <div>
        <p>{feedback.description}</p>
      </div>
    </div>
  );
};

export default ClientFeedbackDetails;
