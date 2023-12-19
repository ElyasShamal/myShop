import "./Navbar.css";
import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" height="50px" width="50px" />
        {/* <p>SHOPPER</p> */}
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/Men">Men</Link>
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/Women">Women</Link> {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/Kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login">
        <img src={cart} alt="cart" height="25px" width="25px" />
        <div className="cart-count">0</div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
