import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import classes from "./similar-products.module.css";

const SimilarProducts = ({ product }) => {
  const { products } = useContext(AppContext);
  const { id, category } = product;
  const filteredProducts = products.filter((item) => {
    return item.id !== id;
  });
  const sameCategoryProducts = filteredProducts.filter((item) => {
    return item.category === category;
  });
  const filteredCategories = filteredProducts.filter((item) => {
    return item.category !== category;
  });
  let indexer = 0;
  let length = sameCategoryProducts.length;
  let resultArray = sameCategoryProducts;
  for (; indexer < 3 - length; indexer++) {
    resultArray.push(filteredCategories[indexer]);
  }
  return (
    <section className={classes.section}>
      <h3>you may like</h3>
      <ul className={classes.productsContainer}>
        {resultArray.map((item) => {
          const {
            id,
            images: { mainImage },
            name,
            category,
          } = item;
          return (
            <li key={id} className={classes.card}>
              <div className={classes.image}>
                <img src={mainImage} alt={name} />
              </div>
              <h5>{name}</h5>
              <Link to={`/category/${category}/${id}`}>
                <button>see product</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SimilarProducts;
