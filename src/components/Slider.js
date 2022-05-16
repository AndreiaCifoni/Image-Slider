import React, { useState } from "react";
import "./styles.css";

const Slider = ({ photos }) => {
  const [selector, setSelector] = useState(1);

  const onClickNext = () => {
    if (selector < photos.length) {
      setSelector(selector + 1);
    }
  };

  const onClickPrevious = () => {
    if (selector > 1) {
      setSelector(selector - 1);
    }
  };

  const eachImg = photos.map((photo) => {
    const { id, url, alt } = photo;
    if (id !== selector) {
      return null;
    }
    return <img className="img" key={id} src={url} alt={alt} />;
  });

  return (
    <div>
      <div>{eachImg}</div>
      {selector > 1 ? (
        <button onClick={onClickPrevious}>&larr; Previous</button>
      ) : null}
      {selector < photos.length ? (
        <button onClick={onClickNext}>&rarr; Next</button>
      ) : null}
    </div>
  );
};
export default Slider;
