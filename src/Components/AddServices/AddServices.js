import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const AddServices = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [admins, setAdmins] = useState({});
  const handleBlur = (e) => {
    const newAdmin = { email: e.target.value };
    setAdmins(newAdmin);
    console.log(newAdmin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admins);
    fetch("https://thawing-tundra-59535.herokuapp.com/addAdmins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admins),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mt-5">
      <Link to="/">
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center">Add Services</h4>
      <h4 style={{ textAlign: "right" }}>{loggedUser.name}</h4>
      <div className="row">
        <Sidebar />
        <div style={{ backgroundColor: "#E5E5E5" }} className="col-md-10">
          <div className="main">
            <div className="form">
              <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                <div class="form-group mt-5">
                  <input
                    onBlur={handleBlur}
                    Label="Email"
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <button
                  className="btn btn-success"
                  onSubmit={handleSubmit}
                  style={{
                    width: "134px",
                    height: "45px",
                    backgroundColor: "#009444",
                    borderRadius: "8px",
                    color: "white",
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

export default AddServices;
