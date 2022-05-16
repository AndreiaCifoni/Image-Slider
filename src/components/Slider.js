import React from "react";
import App from "./App";

const Slider = ({ images }) => {
  const eachImg = images.map((photo) => {
    return <img src={`${photo}.image`} width="250" height="300" />;
  });

  return <div>{eachImg}</div>;
};
export default Slider;

// <div>
// <img src="{images.image}" />
// </div>
// <button>&larr</button>
// <button>&rarr</button>
