import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import classes from "./hero-section.module.css";

const HeroSection = () => {
  const { products } = useContext(AppContext);
  const heroProduct = products.find((item) => item.heroProduct === true);
  const {
    name,
    new: newProduct,
    category,
    excerpt,
    id,
    images: {
      coverImages: { desktop, mobile, tablet },
    },
  } = heroProduct;
  return (
    <section className={classes.heroSection}>
      <picture>
        <source media="(min-width:1025px)" srcSet={desktop} />
        <source media="(min-width:541px)" srcSet={tablet} />
        <img className={classes.image} src={mobile} alt="newest product" />
      </picture>
      <div className={`container ${classes.container}`}>
        <div className={classes.textBox}>
          {newProduct && <p className="over-line">new product</p>}
          <h1>
            {name} <br /> {category}
          </h1>
          <p>{excerpt}</p>
          <Link to={`/category/${category}/${id}`}>
            <button>see product</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
