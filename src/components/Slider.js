import React, { useState } from "react";
import App from "./App";

const Slider = ({ photos }) => {
  const [selector, setSelector] = useState("");

  const onClickPrevious = () => {
    setSelector(selector + 1);
  };

  const onClickNext = () => {
    setSelector(selector - 1);
  };

  const eachImg = photos.map((photo) => {
    return (
      <img
        key={`${photo}.id`}
        src={`${photo}.image`}
        width="250"
        height="300"
      />
    );
  });

  return (
    <div>
      <div>{eachImg}</div>
      <button onClick={onClickPrevious}>&larr; Previous</button>
      <button onClick={onClickNext}>&rarr; Next</button>
    </div>
  );
};
export default Slider;

// <div>
// <img src="{images.image}" />
// </div>
// <button>&larr</button>
// <button>&rarr</button>
