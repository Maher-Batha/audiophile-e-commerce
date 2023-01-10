import React from "react";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cart from "./Cart";

const Navbar = () => {
  const {
    cart,
    openMenu,
    closeMenu,
    isMenuOpen,
    isCartOpen,
    openCart,
    closeCart,
  } = useContext(AppContext);
  const cartHanddler = () => {
    if (isCartOpen) {
      closeCart();
    } else {
      openCart();
    }
  };
  const handleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    }
    if (!isMenuOpen) {
      openMenu();
    }
  };
  return (
    <nav className={classes.navbar}>
      <div className={`container ${classes.container}`}>
        <FaBars className={classes.bars} onClick={handleMenu} />
        <div className={classes.logo}>
          <FaBars onClick={handleMenu} />
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <ul className={classes.links}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={`category/headphones`}
            >
              headphones
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={`category/speakers`}
            >
              speakers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={`category/earphones`}
            >
              earphones
            </NavLink>
          </li>
        </ul>
        <button
          className={
            cart.length > 0
              ? `${classes.cartBtn} ${classes.active}`
              : classes.cartBtn
          }
          onClick={cartHanddler}
        >
          <AiOutlineShoppingCart />
        </button>
        {isMenuOpen && <Submenu />}
        {isCartOpen && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
