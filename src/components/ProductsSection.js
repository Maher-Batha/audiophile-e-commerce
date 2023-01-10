import React from "react";
import SingleProductCard from "./SingleProductCard";

const ProductsSection = ({ products }) => {
  return (
    <section className="products-section">
      <div className="container">
        {products.map((item, index) => {
          const {
            id,
            name,
            images: { mainImage },
            category,
            description,
            new: newProduct,
          } = item;
          return (
            <SingleProductCard
              key={id}
              name={name}
              image={mainImage}
              category={category}
              description={description}
              condition={newProduct}
              id={id}
              className={index % 2 === 0 ? "" : "reverse"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
