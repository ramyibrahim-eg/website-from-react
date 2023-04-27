// All Rights Reserved. © disgin.website

import React from "react";
import "./contact.css";
import Header from "./../../components/header/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magni,
        nobis recusandae sunt eius ut! Adipisci iure officiis vitae nihil.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:support@disgin.website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsMessenger />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
