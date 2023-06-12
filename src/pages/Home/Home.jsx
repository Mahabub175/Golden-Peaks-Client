import React from "react";
import Banner from "../../components/BannerSlider.jsx/Banner";
import PopularClass from "./PopularClass";
import Bestinstructors from "./Bestinstructors";
import AboutUS from "./AboutUS";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="my-container">
      <Helmet>
        <title>Golden Peaks | Home</title>
      </Helmet>
      <Banner />
      <PopularClass />
      <Bestinstructors />
      <AboutUS />
    </div>
  );
};

export default Home;
