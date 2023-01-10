import React from "react";
import classes from "./product-gallery.module.css";
const ProductGallery = ({ images }) => {
  const { gallery } = images;
  return (
    <section className={classes.gallery}>
      {gallery.map((item, index) => {
        return (
          <div key={index} className={classes.image}>
            <img src={item} alt="gallery" />
          </div>
        );
      })}
    </section>
  );
};

export default ProductGallery;
