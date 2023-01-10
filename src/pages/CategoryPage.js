import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  BestGear,
  Categories,
  CategoryTitle,
  ProductsSection,
} from "../components";
import ErrorPage from "./ErrorPage";
import { AppContext } from "../context/AppContext";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products } = useContext(AppContext);
  const categoryProducts = products.filter((element) => {
    return element.category === categoryName;
  });
  if (categoryProducts.length < 1) {
    return <ErrorPage />;
  }
  return (
    <>
      <CategoryTitle title={categoryName} />
      <ProductsSection products={categoryProducts} />
      <section>
        <Categories />
      </section>
      <BestGear />
    </>
  );
};

export default CategoryPage;
