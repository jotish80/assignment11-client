import React from "react";
import air from "../../images/logos/air.png";
import netflix from "../../images/logos/netflix.png";
import slack from "../../images/logos/slack.png";
import uber from "../../images/logos/uber.png";
import google1 from "../../images/logos/google1.png";

const Brands = () => {
  return (
    <section className="mt-5 row d-flex justify-content-center pt-5">
      <div className="col-md-2">
        <img
          style={{
            width: "140px",
            height: "36px",
            left: "233px",
            top: "774px",
          }}
          src={slack}
          alt=""
        />
      </div>
      <div className="col-md-2">
        <img
          style={{
            width: "140px",
            height: "36px",
            left: "233px",
            top: "774px",
          }}
          src={google1}
          alt=""
        />
      </div>
      <div className="col-md-2">
        <img
          style={{
            width: "140px",
            height: "36px",
            left: "233px",
            top: "774px",
          }}
          src={uber}
          alt=""
        />
      </div>
      <div className="col-md-2">
        <img
          style={{
            width: "140px",
            height: "36px",
            left: "233px",
            top: "774px",
          }}
          src={netflix}
          alt=""
        />
      </div>
      <div className="col-md-2">
        <img
          style={{
            width: "140px",
            height: "36px",
            left: "233px",
            top: "774px",
          }}
          src={air}
          alt=""
        />
      </div>
    </section>
  );
};

export default Brands;
