import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/breadcrums/Breadcrums";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((event) => event.id === Number(productId));
  return (
    <div className="products">
      <Breadcrums product={product} />
    </div>
  );
};

export default Product;
