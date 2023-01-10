import React, { useContext } from "react";
import classes from "./purchase-modal.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const PurchaseModal = () => {
  const { cart, totalAmount, closePurchaseModal, clearCart, clearInputs } =
    useContext(AppContext);
  return (
    <section className={classes.overlay}>
      <article className={classes.modal}>
        <div className={classes.checkIcon}>
          <AiOutlineCheck />
        </div>
        <h3 className={classes.message}>
          thank you <br /> for your order
        </h3>
        <p className={classes.text}>
          You will receive an email confirmation shortly.
        </p>
        <div className={classes.orderInfo}>
          <ul className={classes.cart}>
            {cart.map((item) => {
              const { id, name, price, image, qty } = item;
              return (
                <li key={id}>
                  <img src={image} alt={name} />
                  <div className={classes.info}>
                    <p className={classes.name}>{name}</p>
                    <p className={classes.price}>$ {price}</p>
                  </div>
                  <p className={classes.qty}>x{qty}</p>
                </li>
              );
            })}
          </ul>
          <div className={classes.grandTotal}>
            <p className={classes.total}>grand total</p>
            <p className={classes.amount}>${totalAmount}</p>
          </div>
        </div>
        <Link
          to="/"
          onClick={() => {
            closePurchaseModal();
            clearCart();
            clearInputs();
          }}
        >
          <button className="w-100">back home</button>
        </Link>
      </article>
    </section>
  );
};

export default PurchaseModal;
