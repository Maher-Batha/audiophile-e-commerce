import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <header>
          <img src="/images/logo.svg" alt="logo" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to={`/`}
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
        </header>
        <article>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className={classes.social}>
            <p>Copyright 2021. All Rights Reserved</p>
            <div className={classes.iconsContainer}>
              <Link>
                <FaFacebookSquare />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
