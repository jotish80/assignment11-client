import React from "react";
import peoples from "../../images/logos/peoples.png";
import Navbar from "../Navbar/Navbar";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div className=" header-main">
      <div className=" container header-main-container">
        <Navbar />

        <main className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
            <h1>
              Let's Grow Your <br /> Brand To The <br />
              Next Level
            </h1>

            <p>
              We can help you to reach your goal. The services we provide most
              important for any of your clients!
            </p>

            <button
              style={{ width: "134px", height: "45px" }}
              type="button"
              class="btn btn-dark"
            >
              <b>Hire us</b>
            </button>
          </div>
          <div className="col-md-6">
            <img src={peoples} alt="" className="img-fluid" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeaderMain;
