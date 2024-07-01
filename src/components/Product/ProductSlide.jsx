import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "800px",
};

export default function ProductSlide({ slideImages }) {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Slide>
    </div>
  );
}
