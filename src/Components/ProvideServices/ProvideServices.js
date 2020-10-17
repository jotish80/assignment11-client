import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ServicesAvailable from "../ServicesAvailable/ServicesAvailable";

const ProvideServices = () => {
  const [newService, setNewService] = useState([]);

  //..........Fetch for get all services...........//

  useEffect(() => {
    fetch("https://thawing-tundra-59535.herokuapp.com/getAllService")
      .then((res) => res.json())
      .then((data) => {
        setNewService(data);
        console.log(data);
      });
  }, []);

  return (
    <section className="pt-5 mt-5">
      <div>
        <h1 className="text-center">
          Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>
        </h1>
      </div>
      <div className="row m-3 pt-5">
        {newService.length === 0 && <CircularProgress />}

        {newService.map((services) => (
          <ServicesAvailable services={services} />
        ))}
      </div>
    </section>
  );
};

export default ProvideServices;
