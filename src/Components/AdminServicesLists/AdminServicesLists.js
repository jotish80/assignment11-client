import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import { CircularProgress } from "@material-ui/core";

const AdminServicesLists = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [allServicesList, setAllServicesList] = useState([]);

  const [realTimePageUp, setRealTimePageUp] = useState();

  // ---------fetching all services collection------------//

  useEffect(() => {
    fetch("https://thawing-tundra-59535.herokuapp.com/getServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllServicesList(data);
      });
  }, [allServicesList]);

  const [changeStatus, setChangeStatus] = useState({});

  // ----Change Projects Status form dropdown menu-------------//
  const handleChange = (e) => {
    console.log(e.target.value);
    setChangeStatus({ status: e.target.value });
  };

  // ---------Update status--------------------//
  const handleStatusUpDate = (id) => {
    const data = { id: id, changedStatus: changeStatus.status };
    console.log(data);

    if (changeStatus.status) {
      fetch(`https://thawing-tundra-59535.herokuapp.com/updateStatus`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRealTimePageUp(data);
        });
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/">
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center"> All Services List</h4>
      <h4 style={{ textAlign: "right" }}>{loggedUser.name}</h4>
      <div className="row">
        <Sidebar />
        {allServicesList.length === 0 && <CircularProgress />}

        <div style={{ backgroundColor: "#E5E5E5" }} className="">
          <div>
            <div className="admin__registeredVol">
              <table style={{ width: "900px" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Services</th>
                    <th> Project Details</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allServicesList.map((services) => (
                    <tr>
                      <td data-column="First Name">{services.name}</td>
                      <td data-column="Last Name">{services.email}</td>
                      <td data-column="Job Title">{services.service}</td>
                      <td data-column="Twitter">{services.price}</td>
                      <td data-column="Twitter">{services.description}</td>
                      <td data-column="Twitter">
                        {services.status === "Done" && (
                          <select
                            onChange={handleChange}
                            onBlur={() => handleStatusUpDate(services._id)}
                            className="btn-done"
                          >
                            <option value={services.status}>
                              {services.status}
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Done">Done</option>
                          </select>
                        )}
                        {services.status === "Ongoing" && (
                          <select
                            onChange={handleChange}
                            onBlur={() => handleStatusUpDate(services._id)}
                            className="btn-ongoing"
                          >
                            <option value={services.status}>
                              {services.status}
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Done">Done</option>
                          </select>
                        )}
                        {services.status === "Pending" && (
                          <select
                            onChange={handleChange}
                            onBlur={() => handleStatusUpDate(services._id)}
                            className="btn-pending"
                          >
                            <option value={services.status}>
                              {services.status}
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Done">Done</option>
                          </select>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminServicesLists;
