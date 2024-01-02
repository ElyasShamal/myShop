import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/description/Description";
import ReletedProduct from "../Components/reletedProduct/ReletedProduct";
const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  return (
    <div className="products">
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <ReletedProduct />
    </div>
  );
};

export default Product;
