import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const AdminAddServices = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [newService, setNewService] = useState({
    service: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const temNewService = { ...newService };
    temNewService[e.target.name] = e.target.value;
    setNewService(temNewService);
  };

  const handleImage = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  console.log(newService, file);
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    formData.append("service", newService.service);
    formData.append("description", newService.description);

    fetch("https://thawing-tundra-59535.herokuapp.com/addNewService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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

        <div
          onSubmit={handleSubmit}
          style={{ backgroundColor: "#E5E5E5" }}
          className="col-md-10"
        >
          <div className="main">
            <div className="form">
              <form style={{ width: "800px" }}>
                <div class="form-group mt-5">
                  <input
                    name="service"
                    onBlur={handleBlur}
                    Label="Service Title"
                    type="name"
                    class="form-control"
                    placeholder="Enter title"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    name="description"
                    onBlur={handleBlur}
                    label="Description"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter Description"
                  ></textarea>
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
