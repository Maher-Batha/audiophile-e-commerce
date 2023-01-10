import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BestGear,
  Categories,
  ProductCart,
  ProductGallery,
  ProductInfo,
  SimilarProducts,
  SinglePageTitle,
} from "../components";
import ErrorPage from "./ErrorPage";
import { FaChevronLeft } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(AppContext);
  const findProduct = products.filter((element) => {
    return element.id === productId;
  });
  if (findProduct.length < 1) {
    return <ErrorPage />;
  }
  const {
    id,
    name,
    images,
    description,
    price,
    stock,
    category,
    features,
    inBox,
    new: condition,
  } = findProduct[0];
  return (
    <>
      <SinglePageTitle />
      <div className="container">
        <Link to={"/"} className="go-back">
          <FaChevronLeft /> go back
        </Link>
        <ProductCart
          image={images.mainImage}
          desc={description}
          price={price}
          id={id}
          name={name}
          stock={stock}
          condition={condition}
          category={category}
        />
        <ProductInfo features={features} inBox={inBox} />
        <ProductGallery images={images} />
        <SimilarProducts product={findProduct} />
        <Categories />
        <BestGear />
      </div>
    </>
  );
};

export default SingleProductPage;
