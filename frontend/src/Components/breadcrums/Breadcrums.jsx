import React from "react";
import "./breadcrums.css";
import arrow from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME
      <img src={arrow} alt="" /> Shop
      <img src={arrow} alt="" /> {product.category}
      <img src={arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
