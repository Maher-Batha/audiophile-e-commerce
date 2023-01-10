import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import classes from "./checkout-form.module.css";
import FormField from "./FormField";
import RadioGroup from "./RadioGroup";
const CheckoutForm = () => {
  const { formInputs, fillInput } = useContext(AppContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    fillInput(name, value);
  };
  return (
    <div className={classes.checkoutForm}>
      <h3 className={classes.formTitle}>checkout</h3>
      <form>
        <header className={classes.formSection}>
          <p className={classes.formSectionTitle}>billing details</p>
          <div className={classes.fieldsGroup}>
            <FormField
              onChange={handleChange}
              label="name"
              type="text"
              name="name"
              id="name"
              requried={true}
              placeHolder="maher batha"
              pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
              value={formInputs.name}
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "enter a valid name",
                  empty: "can't be empty",
                },
              }}
            />
            <FormField
              onChange={handleChange}
              label="email address"
              type="email"
              name="email"
              id="email"
              requried={true}
              placeHolder="maher.batha@gmail.com"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              value={formInputs.email}
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "invalid email address",
                  empty: "can't be empty",
                },
              }}
            />
            <FormField
              onChange={handleChange}
              value={formInputs.phone}
              label="phone number"
              type="tel"
              name="phone"
              id="phone"
              requried={true}
              placeHolder="0505275971"
              pattern="^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$"
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "invalid uae number",
                  empty: "can't be empty",
                },
              }}
            />
          </div>
        </header>
        <section className={classes.formSection}>
          <p className={classes.formSectionTitle}>shipping info</p>
          <div className={classes.fieldsGroup}>
            <FormField
              value={formInputs.address}
              onChange={handleChange}
              label="address"
              type="text"
              name="address"
              id="address"
              requried={true}
              placeHolder="building, street, area"
              pattern="(.*?)"
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "invalid address",
                  empty: "can't be empty",
                },
              }}
              className="w-100"
            />
            <FormField
              value={formInputs.zip}
              onChange={handleChange}
              label="zip code"
              type="text"
              name="zip"
              id="zip"
              requried={true}
              placeHolder="10001"
              pattern="\d+"
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "invalid zip code",
                  empty: "can't be empty",
                },
              }}
            />
            <FormField
              value={formInputs.city}
              onChange={handleChange}
              label="city"
              type="text"
              name="city"
              id="city"
              requried={true}
              placeHolder="dubai"
              pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "unknown city",
                  empty: "can't be empty",
                },
              }}
            />
            <FormField
              value={formInputs.country}
              onChange={handleChange}
              label="country"
              type="text"
              name="country"
              id="country"
              requried={true}
              placeHolder="united arab emirates"
              pattern="[a-zA-Z]{2,}"
              small={{
                message: {
                  default: "",
                  success: "success",
                  error: "unknown country",
                  empty: "can't be empty",
                },
              }}
            />
          </div>
        </section>
        <footer className={classes.formSection}>
          <p className={classes.formSectionTitle}>payment method</p>
          <div>
            <RadioGroup
              onChange={handleChange}
              name={"pMethod"}
              groupTitle="payment method"
              fields={[
                {
                  label: "e-Money",
                  value: "visa",
                  id: "visa",
                },
                {
                  label: "cash on delivery",
                  value: "cash",
                  id: "cash",
                },
              ]}
            />
            {formInputs.pMethod === "visa" ? (
              <div className={classes.fieldsGroup}>
                <FormField
                  value={formInputs.cardNumber}
                  onChange={handleChange}
                  label="e-money number"
                  type="text"
                  name="cardNumber"
                  id="card-number"
                  requried={true}
                  placeHolder="4155279860457"
                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  small={{
                    message: {
                      default: "",
                      success: "success",
                      error: "invalid card number",
                      empty: "can't be empty",
                    },
                  }}
                />
                <FormField
                  value={formInputs.cardPin}
                  onChange={handleChange}
                  label="e-money pin"
                  type="text"
                  name="cardPin"
                  id="pin"
                  requried={true}
                  placeHolder="6891"
                  pattern="^[0-9]{3,4}$"
                  small={{
                    message: {
                      default: "",
                      success: "success",
                      error: "invalid pin",
                      empty: "can't be empty",
                    },
                  }}
                />
              </div>
            ) : (
              <p className={classes.cashMessage}>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            )}
          </div>
        </footer>
      </form>
    </div>
  );
};

export default CheckoutForm;
