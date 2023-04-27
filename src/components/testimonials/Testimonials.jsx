// All Rights Reserved. © disgin.website

import React from "react";
import SectionHead from "../SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "./../../data";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, jop, avatar } = testimonials[index];

  const prevTestimonaialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonaialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="testimonials"
          className="testimonials__head"
        />
        <Card className="testimonaial">
          <div className="testimonials__avater">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonaial__quote">{quote}</p>
          <h4>{name}</h4>
          <small className="testimonaial__title">{jop}</small>
        </Card>
        <div className="testimonials__btn__container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonaialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonaialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
