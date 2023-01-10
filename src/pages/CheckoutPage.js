import React from "react";
import { SinglePageTitle, CheckoutForm, CheckoutSummary } from "../components";

const CheckoutPage = () => {
  return (
    <>
      <SinglePageTitle />
      <section className="checkout-page">
        <div className="container">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
