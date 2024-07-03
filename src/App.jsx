import React from "react";
import { products } from "./utils/data";
import ProductSlide from "./components/ProductSlide";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ProductSlide products={products} />
    </div>
  );
};

export default App;
