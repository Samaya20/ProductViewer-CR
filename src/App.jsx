import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import ProductSlide from "./components/Product/ProductSlide";
import { slideImages } from "./utils/data";

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <ProductSlide slideImages={slideImages} />
      </div>
      <div className="right-side">
        <Content />
      </div>
    </div>
  );
}

export default App;
