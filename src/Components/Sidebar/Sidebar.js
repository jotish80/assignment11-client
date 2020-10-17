import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AddIcon from "@material-ui/icons/Add";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ListIcon from "@material-ui/icons/List";
import { UserContext } from "../../App";

const Sidebar = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/isAdminExist/" + loggedUser.email)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        console.log("sidebar", data);
      });
  }, [loggedUser]);

  return (
    <div className="col-md-2">
      <p>
        <Link to="/ordersubmitform">
          <ShoppingCartIcon />{" "}
          <span style={{ color: "#7AB259" }}>&nbsp; Order</span>
        </Link>
      </p>
      <p>
        <Link to="/orderserviceslist">
          {" "}
          <span>
            {" "}
            <ShoppingBasketIcon /> &nbsp; Services list
          </span>
        </Link>
      </p>
      <p>
        <RateReviewIcon /> &nbsp;
        <Link to="/reviewform">
          <span> Review</span>
        </Link>
      </p>{" "}
      {isAdmin.length !== 0 && (
        <span>
          <p>
            <Link to="/adminserviceslists">
              {" "}
              <span>
                <ListIcon /> &nbsp; All Services list
              </span>
            </Link>
          </p>
          <p>
            <Link to="/adminaddservices">
              <span>
                <AddIcon /> &nbsp; Add Services
              </span>
            </Link>
          </p>
          <p>
            <span style={{ color: "#7AB259" }}>
              <Link to="/addservices">
                <span>
                  <PersonAddIcon /> &nbsp; Make Admin{" "}
                </span>
              </Link>
            </span>
          </p>
        </span>
      )}
    </div>
  );
};

export default Sidebar;
