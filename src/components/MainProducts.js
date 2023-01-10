import React, { useContext } from "react";
import classes from "./main-products.module.css";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
const MainProducts = () => {
  const { products } = useContext(AppContext);
  const zx9Speaker = products.find((item) => item.name === "zx9");
  const zx7Speaker = products.find((item) => item.name === "zx7");
  const yx1Speaker = products.find((item) => item.name === "yx1");

  return (
    <section className={classes.mainProducts}>
      <div className="container">
        <div className={classes.zx9}>
          <div className={classes.zx9Info}>
            <h1>
              {zx9Speaker.name}
              <br />
              {zx9Speaker.category}
            </h1>
            <p>{zx9Speaker.excerpt}</p>
            <Link to={`/category/${zx9Speaker.category}/${zx9Speaker.id}`}>
              <button>see product</button>
            </Link>
          </div>
          <img src="/images/home/zx9.png" alt={zx9Speaker.name} />
        </div>
        <div className={classes.zx7}>
          <img src="/images/home/zx7.jpg" alt={zx7Speaker.name} />
          <div className={classes.zx7Info}>
            <h4>
              {zx7Speaker.name} {zx7Speaker.category}
            </h4>
            <Link to={`/category/${zx7Speaker.category}/${zx7Speaker.id}`}>
              <button>see product</button>
            </Link>
          </div>
        </div>
        <div className={classes.yx1}>
          <img src="/images/home/yx1.jpg" alt={yx1Speaker.name} />
          <div className={classes.yx1Info}>
            <h4>
              {yx1Speaker.name} {yx1Speaker.category}
            </h4>
            <Link to={`/category/${yx1Speaker.category}/${yx1Speaker.id}`}>
              <button>see product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
