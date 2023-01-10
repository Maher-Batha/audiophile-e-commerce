const productsReducer = (state, action) => {
  if (action.type === "OPEN_MENU") {
    return { ...state, isMenuOpen: true };
  }
  if (action.type === "CLOSE_MENU") {
    return { ...state, isMenuOpen: false };
  }
  if (action.type === "ADD_TO_CART") {
    const { id, qty } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);
    const foundProduct = state.products.find((element) => element.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newQty = cartItem.qty + qty;
          return { ...cartItem, qty: newQty };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: foundProduct.name,
        image: foundProduct.images.mainImage,
        price: foundProduct.price,
        qty,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "CART_ITEMS_COUNT") {
    const { itemCount, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { price, qty } = cartItem;
        total.itemCount += qty;
        total.totalAmount += price * qty;
        return total;
      },
      { itemCount: 0, totalAmount: 0 }
    );
    return {
      ...state,
      itemCount,
      totalAmount,
      shipping: state.cart.length * 12.5,
      grandTotal: state.totalAmount + state.shipping,
    };
  }
  if (action.type === "OPEN_CART") {
    return { ...state, isCartOpen: true };
  }
  if (action.type === "CLOSE_CART") {
    return { ...state, isCartOpen: false };
  }
  if (action.type === "FILL_INPUT") {
    const { name, value } = action.payload;
    if (name === "pMethod") {
      if (value === "cash") {
        return {
          ...state,
          formInputs: {
            ...state.formInputs,
            [name]: value,
            cardNumber: "4155279860457",
            cardPin: "6891",
          },
        };
      }
    }
    return { ...state, formInputs: { ...state.formInputs, [name]: value } };
  }
  if (action.type === "OPEN_PURCHASE_MODAL") {
    return { ...state, purchaseModal: true };
  }
  if (action.type === "CLOSE_PURCHASE_MODAL") {
    return { ...state, purchaseModal: false };
  }
  if (action.type === "CLEAR_INPUTS") {
    return {
      ...state,
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
    };
  }
  if (action.type === "CART_ITEM") {
    const { id, operation } = action.payload;
    const tempCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (operation === "minus") {
            let newQty = item.qty - 1;
            return { ...item, qty: newQty };
          }
          if (operation === "plus") {
            let newQty = item.qty + 1;
            return { ...item, qty: newQty };
          }
        } else {
          return item;
        }
      })
      .filter((item) => item.qty > 0);
    return { ...state, cart: tempCart };
  }
  return { ...state };
};
export default productsReducer;
