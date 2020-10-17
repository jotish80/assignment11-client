import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const ReviewForm = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [review, setreview] = useState({
    name: loggedUser.name,
    img: "",
    designation: "",
    description: "",
    profilePicture: loggedUser.profilePicture,
  });
  console.log(review);
  const handleBlur = (e) => {
    review[e.target.name] = e.target.value;
    console.log(review);
  };

  //..............Handle submit with fetch.............//

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/addReviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mt-5">
      <Link to="/">
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center">Order Review</h4>
      <h4 style={{ textAlign: "right" }}>{loggedUser.name}</h4>
      <div className="row">
        <Sidebar />

        <div style={{ backgroundColor: "#E5E5E5" }} className="col-md-10">
          <div className="main">
            <div className="form">
              <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                <div class="form-group mt-5">
                  <input
                    name="name"
                    type="name"
                    onBlur={handleBlur}
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="designation"
                    onBlur={handleBlur}
                    type="text"
                    class="form-control"
                    id="exampleInputText"
                    placeholder="Company's Name, Designation"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    name="description"
                    onBlur={handleBlur}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Description"
                  ></textarea>
                </div>

                <button
                  onSubmit={handleSubmit}
                  class="btn btn-dark"
                  style={{
                    width: "134px",
                    height: "45px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
