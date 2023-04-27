// All Rights Reserved. © disgin.website

import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";
import Programss from "./../../components/programs";
import Values from "../../components/Values";
import FAQs from "../../components/faq/FAQs";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programss />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
