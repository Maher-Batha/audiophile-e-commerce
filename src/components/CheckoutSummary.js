import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import classes from "./checkout-summary.module.css";

const CheckoutSummary = ({ data }) => {
  const {
    cart,
    totalAmount,
    formInputs,
    openPurchaseModal,
    shipping,
    grandTotal,
    clearInputs,
  } = useContext(AppContext);
  const [purchase, setPurchase] = useState(true);
  const [purchaseMessage, setPurchaseMessage] = useState("");
  const checkForm = () => {
    const isFormValid = Object.values(formInputs).every(
      (element) => element !== ""
    );
    if (cart.length > 0) {
      if (isFormValid) {
        setPurchase(true);
        setPurchaseMessage("you are rich!");
        clearInputs();
        openPurchaseModal();
      } else {
        setPurchase(false);
        setPurchaseMessage("may i know who you are?");
      }
    } else {
      setPurchase(false);
      setPurchaseMessage("you think you're funny?");
    }
  };
  return (
    <aside className={classes.article}>
      <p className={classes.title}>summary</p>
      <ul className={classes.list}>
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
      <div className={classes.details}>
        <p className={classes.thin}>total</p>
        <p className={classes.thick}>$ {totalAmount}</p>
      </div>
      <div className={classes.details}>
        <p className={classes.thin}>shipping</p>
        <p className={classes.thick}>$ {shipping}</p>
      </div>
      <div className={classes.details}>
        <p className={classes.thin}>grand total</p>
        <p className={classes.thick}>$ {grandTotal}</p>
      </div>
      <button className={classes.pay} onClick={checkForm}>
        continue & pay
      </button>
      {!purchase && <small className={classes.small}>{purchaseMessage}</small>}
    </aside>
  );
};

export default CheckoutSummary;
