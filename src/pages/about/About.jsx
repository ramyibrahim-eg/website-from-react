// All Rights Reserved. © disgin.website

import React from "react";
import "./about.css";
import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
        consectetur, accusamus placeat magni rerum vero.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              nobis tempora cumque. Quos itaque modi atque voluptas! Officia,
              aliquam nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dolorum magnam nobis eaque unde nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              itaque?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              nobis tempora cumque. Quos itaque modi atque voluptas! Officia,
              aliquam nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dolorum magnam nobis eaque unde nam!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              nobis tempora cumque. Quos itaque modi atque voluptas! Officia,
              aliquam nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dolorum magnam nobis eaque unde nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              itaque?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
