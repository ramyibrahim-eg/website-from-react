import React from "react";
import HeaderImage from "../../images/header_bg_5.jpg";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

const Programs = () => {
  return (
    <>
      <Header title="Our Programs" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        aliquam nisi porro sed distinctio molestiae impedit sapiente voluptas
        eius exercitationem!
      </Header>
      <Outlet />
    </>
  );
};

export default Programs;
