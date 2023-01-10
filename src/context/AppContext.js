import React from "react";
import { useReducer } from "react";
import { productsData } from "../utils/productsData";
import reducer from "../reducers/ProductsReducer";

const AppContext = React.createContext();

const initialState = {
  products: productsData,
  isMenuOpen: false,
  cart: [],
  itemCount: 0,
  totalAmount: 0,
  isCartOpen: false,
  formInputs: {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    pMethod: "visa",
    cardNumber: "",
    cardPin: "",
  },
  purchaseModal: false,
  shipping: 0,
  grandTotal: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMenu = () => {
    dispatch({ type: "OPEN_MENU" });
  };
  const closeMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };
  const addToCart = (id, qty) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, qty } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const calculateItems = () => {
    dispatch({ type: "CART_ITEMS_COUNT" });
  };
  const openCart = () => {
    dispatch({ type: "OPEN_CART" });
  };
  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };
  const fillInput = (name, value) => {
    dispatch({ type: "FILL_INPUT", payload: { name, value } });
  };
  const openPurchaseModal = () => {
    dispatch({ type: "OPEN_PURCHASE_MODAL" });
  };
  const closePurchaseModal = () => {
    dispatch({ type: "CLOSE_PURCHASE_MODAL" });
  };
  const clearInputs = () => {
    dispatch({ type: "CLEAR_INPUTS" });
  };
  const cartItem = (id, operation) => {
    dispatch({ type: "CART_ITEM", payload: { id, operation } });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu,
        addToCart,
        clearCart,
        calculateItems,
        openCart,
        closeCart,
        fillInput,
        openPurchaseModal,
        closePurchaseModal,
        clearInputs,
        cartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
