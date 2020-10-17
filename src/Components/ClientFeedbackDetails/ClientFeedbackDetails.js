import React, { useEffect, useState } from "react";
import ReviewDataShow from "../ReviewDataShow/ReviewDataShow";

const ClientFeedbackDetails = ({ feedback }) => {
  const [reviewList, setReviewList] = useState([]);

  //.......Fetch for get reviews...........//

  useEffect(() => {
    fetch("https://thawing-tundra-59535.herokuapp.com/getReviews")
      .then((res) => res.json())
      .then((data) => {
        setReviewList(data);
      });
  }, []);

  return (
    <div className="container">
      <h3 className="text-center mb-4 mt-5">
        Customer <span style={{ color: "#7AB259" }}> Feedback</span>
      </h3>
      <div className="d-flex p-5">
        {reviewList.map((review) => (
          <div className="col-md-4">
            <ReviewDataShow review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedbackDetails;
