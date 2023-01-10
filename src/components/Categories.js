import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import classes from "./category-section.module.css";
const Categories = () => {
  const { products } = useContext(AppContext);
  const allCategories = [
    ...new Set(
      products.map((item) => {
        return item.category;
      })
    ),
  ];
  const categoriesImages = [
    ...new Set(
      products.map((item) => {
        return item.images.categoryImage;
      })
    ),
  ];
  let categoriesArray = [];
  let indexer = 0;
  let length = allCategories.length;
  for (; indexer < length; indexer++) {
    let object = {};
    object.title = allCategories[indexer];
    object.image = categoriesImages[indexer];
    categoriesArray.push(object);
  }
  return (
    <>
      <div className={`container ${classes.container}`}>
        {categoriesArray.map((item, index) => {
          const { image, title } = item;
          return (
            <Link key={index} to={`/category/${title}`}>
              <div className={classes.category}>
                <div className={classes.image}>
                  <img src={image} alt={title} />
                </div>
                <h6>{title}</h6>
                <button>
                  shop <FaChevronRight />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
