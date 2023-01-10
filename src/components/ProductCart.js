import React, { useState, useContext, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import classes from "./product-cart.module.css";

const ProductCart = ({
  image,
  price,
  stock,
  id,
  desc,
  name,
  condition,
  category,
}) => {
  const [qty, setQty] = useState(1);
  const [productPrice, setProductPrice] = useState(price);
  const { addToCart } = useContext(AppContext);
  const handleQuantity = (action) => {
    if (action === "plus") {
      if (qty === stock) {
        return;
      } else {
        setQty((prevState) => {
          return prevState + 1;
        });
      }
    }
    if (action === "minus") {
      if (qty === 1) {
        return;
      } else {
        setQty((prevState) => {
          return prevState - 1;
        });
      }
    }
  };
  useEffect(() => {
    setProductPrice(price * qty);
  }, [qty, price]);
  return (
    <section className={classes.product}>
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
        <p>{desc}</p>
        <h4>$ {productPrice}</h4>
        <div className={classes.addToCart}>
          <div className={classes.quantity}>
            <span
              className={classes.minus}
              onClick={() => handleQuantity("minus")}
            >
              <FaMinus />
            </span>
            {qty}
            <span
              className={classes.plus}
              onClick={() => handleQuantity("plus")}
            >
              <FaPlus />
            </span>
          </div>
          <button onClick={() => addToCart(id, qty)}>add to cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
