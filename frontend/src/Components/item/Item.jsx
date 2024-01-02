import React from "react";
import "./Item.css";

import { Link } from "react-router-dom";

const Item = (props) => {
  const ScrolToTop = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={() => ScrolToTop()} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
