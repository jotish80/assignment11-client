import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const AdminAddServices = () => {
  return (
    <div className="container mt-5">
      <Link to="/">
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center">Add Services</h4>
      <div className="row">
        <div className="col-md-2">
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
            &nbsp; Services list
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
            <span style={{ color: "#7AB259" }}> &nbsp; Add Services</span>
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
            <Link to="addservices">&nbsp; Make Admin</Link>
          </p>
        </div>

        <div style={{ backgroundColor: "#E5E5E5" }} className="col-md-10">
          <div className="main">
            <div className="form">
              <form style={{ width: "500px" }}>
                <div class="form-group mt-5">
                  <input
                    Label="Service Title"
                    type="name"
                    class="form-control"
                    placeholder="Enter title"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    label="Description"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter Description"
                  ></textarea>
                  <div class="form-group">
                    <input
                      type="file"
                      class="form-control"
                      id="file"
                      aria-describedby="textHelp"
                      placeholder="Upload image"
                    />
                  </div>
                  <button
                    class="btn btn-dark"
                    style={{
                      width: "134px",
                      height: "45px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddServices;
