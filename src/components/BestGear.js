import React from "react";
import classes from "./best-gear.module.css";
const BestGear = () => {
  return (
    <section>
      <div className={`container ${classes.bestGear}`}>
        <div className={classes.image}>
          <img src="/images/home/best-gear.jpg" alt="best gear" />
        </div>
        <div className={classes.textBox}>
          <h2>
            Bringing you the <br /> <span>best</span> audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestGear;
