import React from "react";
import Brands from "../Brands/Brands";
import ClientFeedbackDetails from "../ClientFeedbackDetails/ClientFeedbackDetails";
import Footer from "../Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import OurWorks from "../OurWorks/OurWorks";
import ProvideServices from "../ProvideServices/ProvideServices";

const Home = () => {
  return (
    <div>
      <HeaderMain />
      <Brands />
      <ProvideServices />
      <OurWorks />
      <ClientFeedbackDetails />
      <Footer />
    </div>
  );
};

export default Home;
