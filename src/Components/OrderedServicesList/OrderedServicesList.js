import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const OrderServicesList = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [order, setOrder] = useState([]);

  //.........Fetch for get orders.................//

  useEffect(() => {
    fetch("http://localhost:5000/getOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      });
  }, []);

  return (
    <div className="container mt-5">
      <Link to="/">
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Link>
      <h4 className="text-center">Order</h4>
      <h4 style={{ textAlign: "right" }}>{loggedUser.name}</h4>
      <div className="row">
        <Sidebar />

        <div
          style={{ backgroundColor: "#E5E5E5" }}
          className="col-md-10 d-flex"
        >
          <div
            className="main d-flex align-items-center justify-content-center"
            style={{ flexWrap: "wrap" }}
          >
            {order.map((order) => (
              <div
                class="card-deck"
                style={{
                  height: "auto",
                  width: "400px",
                  margin: "5px",
                  padding: "10px",
                }}
              >
                <div class="card d-flex align-items-center justify-content-center">
                  <div class="card-body">
                    <p class="card-text">{order.service}</p>
                    <p class="card-text">
                      <small class="text-muted"> {order.description}</small>
                    </p>
                    <p class="card-text">{order.price}</p>
                  </div>
                  {order.status === "Done" && (
                    <button className="btn-done">{order.status}</button>
                  )}
                  {order.status === "Ongoing" && (
                    <button className="btn-ongoing">{order.status}</button>
                  )}
                  {order.status === "Pending" && (
                    <button className="btn-pending">{order.status}</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderServicesList;
