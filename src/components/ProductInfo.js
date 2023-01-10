import React from "react";
import classes from "./product-info.module.css";
const ProductInfo = ({ features, inBox }) => {
  return (
    <section className={classes.info}>
      <div className={classes.features}>
        <h2>features</h2>
        {features.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className={classes.inBox}>
        <h2>in the box</h2>
        <ul>
          {inBox.map((item, index) => {
            const { qty, info } = item;
            return (
              <li key={index}>
                <span className={classes.qty}>{qty}x</span>
                <p>{info}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductInfo;
