import React from "react";
import Homeservices from "../components/homeservices";
import Homeabout from "../components/homeabout";
import QuoteForm from "../components/quote";
import Banner from "../components/mainbanner";
import OurBenefits from "../components/homebenefits";

const Home = () => {

  return (
    <div className="home-page">
      <Banner />
      <OurBenefits/>
      <Homeabout />
      <Homeservices />
      <QuoteForm />
    </div>
  );
};

export default Home;
