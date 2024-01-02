import React, { useContext } from "react";
import "./productdisplay.css";
import star from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/Context";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="displayleft">
        <div className="displayleft-img-left">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} className="main-img" alt="" />
        </div>
      </div>

      <div className="displayright">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" />
          <p>(12222)</p>
        </div>
        <div className="produtdisplay-right-prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>

        <div className="discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod
          vel incidunt vitae beatae libero ad eaque, ab ratione repudiandae et
          quo neque similiqu utem omnis repellendus eligendi?
        </div>

        <div className="right-description">
          <h1>Select Size</h1>
        </div>

        <div className="right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="add-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
