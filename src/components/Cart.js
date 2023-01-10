import React, { useContext } from "react";
import classes from "./cart.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Cart = () => {
  const {
    cart,
    clearCart,
    itemCount,
    calculateItems,
    totalAmount,
    closeCart,
    cartItem,
  } = useContext(AppContext);
  useEffect(() => {
    calculateItems();
  }, [cart, calculateItems]);
  return (
    <aside className={classes.cart}>
      <header>
        <h6>cart ({itemCount})</h6>
        <p className={classes.remove} onClick={clearCart}>
          remove all
        </p>
      </header>
      {cart.length > 0 ? (
        <ul className={classes.productList}>
          {cart.map((item) => {
            const { id, image, name, price, qty } = item;
            return (
              <li key={id} className={classes.item}>
                <div className={classes.image}>
                  <img src={image} alt={name} />
                </div>
                <div className={classes.info}>
                  <p className={classes.name}>{name}</p>
                  <p className={classes.price}>$ {price}</p>
                </div>
                <div className={classes.quantity}>
                  <span
                    className={classes.minus}
                    onClick={() => cartItem(id, "minus")}
                  >
                    <FaMinus />
                  </span>
                  {qty}
                  <span
                    className={classes.plus}
                    onClick={() => cartItem(id, "plus")}
                  >
                    <FaPlus />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className={classes.productList}>
          <li>
            <p>no products added to cart</p>
          </li>
        </ul>
      )}

      <footer>
        <div className={classes.total}>
          <p>total</p>
          <h6 className={classes.totalPrice}>${totalAmount}</h6>
        </div>
        {cart.length > 0 ? (
          <Link to="/checkout" className={classes.checkout} onClick={closeCart}>
            <button>checkout</button>
          </Link>
        ) : (
          <Link to="/" className={classes.checkout} onClick={closeCart}>
            <button>view products</button>
          </Link>
        )}
      </footer>
    </aside>
  );
};

export default Cart;
