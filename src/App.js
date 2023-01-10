import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, PurchaseModal } from "./components";
import { AppContext } from "./context/AppContext";
import { Home, Category, Checkout, Error, SingleProduct } from "./pages";

const App = () => {
  const { purchaseModal } = useContext(AppContext);
  return (
    <Router>
      <Navbar />
      {purchaseModal && <PurchaseModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route
          path="/category/:categoryName/:productId"
          element={<SingleProduct />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
