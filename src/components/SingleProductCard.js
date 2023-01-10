import React from "react";
import { Link } from "react-router-dom";
import classes from "./single-product-card.module.css";

const SingleProductCard = ({
  name,
  image,
  description,
  condition,
  id,
  category,
  className,
}) => {
  return (
    <div className={`${className} ${classes.card}`}>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.textBox}>
        {condition && (
          <p className={`over-line ${classes.overLine}`}>new product</p>
        )}
        <h2>
          {name} <br /> {category}
        </h2>
        <p>{description}</p>
        <Link to={`/category/${category}/${id}`}>
          <button>see product</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductCard;
