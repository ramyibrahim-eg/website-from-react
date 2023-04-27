// All Rights Reserved. © disgin.website

import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { useCartContext } from "../../pages/plans/context/CartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useCartContext();
  const [isNavShowing, setIsNavShowing] = useState(false);

  const showCart = () => {
    if (cartQuantity === 0) {
      <></>;
    } else {
      return (
        <button className="circle__button" onClick={openCart}>
          <FaCartArrowDown />
          <span className="circle__number">{cartQuantity}</span>
        </button>
      );
    }
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <>{showCart()}</>

        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
