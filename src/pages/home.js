import React from "react";
import Homeservices from "../components/homeservices";
import Homeabout from "../components/homeabout";
import QuoteForm from "../components/quote";
import Banner from "../components/mainbanner";

const Home = () => {

  return (
    <div className="home-page">
      <Banner />
      <Homeabout />
      <Homeservices />
      <QuoteForm />
    </div>
  );
};

export default Home;
