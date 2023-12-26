import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/Context";
import dropDown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/Item";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        src={props.banner}
        className="shopcategory-banner"
        alt="allpages-bunner"
      />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropDown_icon} alt="dropDown" />
        </div>
      </div>

      <div className="shopCategory-products">
        {allProducts.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="more">Explore More</div>
    </div>
  );
};

export default ShopCategory;
