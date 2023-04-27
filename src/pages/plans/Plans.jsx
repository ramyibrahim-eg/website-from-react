// All Rights Reserved. © disgin.website

import React from "react";
import "./plans.css";
import plans from "./data.json";
import Header from "./../../components/header/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import StoreItem from "./StoreItem";

const Plans = () => {
  return (
    <>
      <Header title="MemberShep Plan" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
        labore!
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map((item) => (
            <Card key={item.id} className="plan">
              <StoreItem {...item} />
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Plans;
