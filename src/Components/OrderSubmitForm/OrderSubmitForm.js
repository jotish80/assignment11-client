import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const OrderSubmitForm = () => {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [subscribeToService, setSubscribeToService] = useState({
    name: loggedUser.name,
    email: loggedUser.email,
    service: "",
    description: "",
    price: "",
    status: "Pending",
  });

  //..................handle blur.............//

  const handleBlur = (e) => {
    subscribeToService[e.target.name] = e.target.value;
    console.log(subscribeToService);
    console.log(e.target.value);
  };

  //....................handle image ................//

  const handleImage = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  //....................handle submit with fetch ................//

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://thawing-tundra-59535.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscribeToService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/orderserviceslist");
        }
      });
  };

  return (
    <div className="container mt-5">
      <Link to="/">
        {" "}
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center">Order</h4>
      <h5 style={{ textAlign: "right" }}>{loggedUser.name}</h5>
      <div className="row">
        <Sidebar />

        <div style={{ backgroundColor: "#E5E5E5" }} className="col-md-10">
          <div className="main">
            <div className="form">
              <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                <div class="form-group mt-5">
                  <input
                    onBlur={handleBlur}
                    name="name"
                    type="name"
                    class="form-control"
                    placeholder="Your Name / Company's Name"
                    value={loggedUser.name}
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    onBlur={handleBlur}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Your Email Address"
                    value={loggedUser.email}
                  />
                </div>
                <div class="form-group">
                  <input
                    name="service"
                    onBlur={handleBlur}
                    type="text"
                    class="form-control"
                    id="exampleInputText"
                    placeholder="Graphic design"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    name="service-details"
                    onBlur={handleBlur}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Project Details"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    name="price"
                    onBlur={handleBlur}
                    type="text"
                    class="form-control"
                    id="exampleInputText"
                    placeholder="Price"
                  />
                </div>
                <div class="form-group">
                  <input
                    onChange={handleImage}
                    name="file"
                    type="file"
                    class="form-control"
                    id="file"
                    placeholder="Upload image"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  class="btn btn-dark"
                  style={{
                    width: "134px",
                    height: "45px",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSubmitForm;
