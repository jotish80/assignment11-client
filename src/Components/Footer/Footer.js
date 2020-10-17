import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FBD062" }} className=" footer-dgn mt-5">
      <div className="row mt-5">
        <div className="col-md-5">
          <h3>
            Let us handle your <br /> project, professionally
          </h3>
          <p>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general
          </p>
        </div>
        <div className="col-md-7">
          <form>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Email Address"
              />
            </div>
            <div class="form-group">
              <input
                type="name"
                class="form-control"
                placeholder="Your Name / Company's Name"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              class="btn btn-dark"
              style={{ width: "134px", height: "45px" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="copyRight text-center mt-5">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
