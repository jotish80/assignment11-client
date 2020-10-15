import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TitleContext, UserContext } from "../../App";
import logo from "../../images/logos/logo.png";

const OrderSubmitForm = () => {
  const { orderid } = useParams();
  console.log("from home page", orderid);
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [title, setTitle] = useContext(TitleContext);

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const [user, setUser] = useState({
    name: loggedUser.name,
    email: loggedUser.email,
    description: "",
    eventTitle: "title.title",
    eventImage: title.img,
  });
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:5000/addOrder", {
      methods: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
  };

  return (
    <div className="container mt-5">
      <Link to="/">
        {" "}
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center">Order</h4>
      <h5 className="m-l">{loggedUser.name}</h5>
      <div className="row">
        <div className="col-md-2">
          <p>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-cart3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
            <span style={{ color: "#7AB259" }}>&nbsp; Order</span>
          </p>

          <p>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-basket2-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"
              />
            </svg>{" "}
            <Link to="/orderserviceslist">&nbsp; Services list </Link>
          </p>

          <p>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-chat-left-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <Link to="/reviewform"> &nbsp; Review</Link>
          </p>
          <p>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            <span>
              {" "}
              <Link to="adminaddservices"> &nbsp; Add Services</Link>
            </span>
          </p>
          <p>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-person-plus"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>{" "}
            <span style={{ color: "#7AB259" }}>
              <Link to="/addservices"> &nbsp; Make Admin </Link>
            </span>
          </p>
        </div>

        <div style={{ backgroundColor: "#E5E5E5" }} className="col-md-10">
          <div className="main">
            <div className="form">
              <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                <div class="form-group mt-5">
                  <input
                    onblur={handleBlur}
                    type="name"
                    class="form-control"
                    placeholder="Your Name / Company's Name"
                    value={loggedUser.name}
                  />
                </div>
                <div class="form-group">
                  <input
                    onblur={handleBlur}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Your Email Address"
                    value={loggedUser.email}
                  />
                </div>
                <div class="form-group">
                  <input
                    onblur={handleBlur}
                    type="text"
                    class="form-control"
                    id="exampleInputText"
                    placeholder="Graphic design"
                    value={title.title}
                  />
                </div>

                <div class="form-group">
                  <textarea
                    onblur={handleBlur}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Project Details"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    onblur={handleBlur}
                    type="text"
                    class="form-control"
                    id="exampleInputText"
                    placeholder="Price"
                  />
                </div>
                <div class="form-group">
                  <input
                    onChange={handleFileChange}
                    type="file"
                    class="form-control"
                    id="file"
                    placeholder="Upload Project File"
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
