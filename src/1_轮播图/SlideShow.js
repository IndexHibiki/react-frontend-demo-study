import React, { useState, useRef, useEffect } from "react";

import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import { ReactComponent as Arrow } from "./arrow.svg";
import "./style.css";

const SlideShow = () => {
  // these elements can be parameters from which use this Component
  // So you can customize your slide show
  const images = [image3, image1, image2, image3, image1];
  const delay = 2000;
  const animeTime = 200;

  const [index, setIndex] = useState(1);
  const timeoutRef = React.useRef(null);

  const toLeft = () => {
    if (index === 1) {
      setIndex(0);

      setTimeout(() => {
        document.getElementsByClassName("image_display")[0].style.transition =
          "";
        setIndex(images.length - 2);
      }, animeTime);

      setTimeout(() => {
        document.getElementsByClassName("image_display")[0].style.transition =
          "all " + animeTime + "ms ease";
      }, delay);
    } else {
      setIndex(index - 1);
    }
  };

  const toRight = () => {
    if (index === images.length - 2) {
      setIndex(images.length - 1);

      setTimeout(() => {
        document.getElementsByClassName("image_display")[0].style.transition =
          "";
        setIndex(1);
      }, animeTime);

      setTimeout(() => {
        document.getElementsByClassName("image_display")[0].style.transition =
          "all " + animeTime + "ms ease";
      }, delay);
    } else {
      setIndex(index + 1);
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // First time the page is rendered, initial Transition
  useEffect(() => {
    document.getElementsByClassName("image_display")[0].style.transition =
      "all " + animeTime + "ms ease";
  }, []);

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => toRight(), delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slide_show">
      {/* To Left and To Right Button */}
      <div className="control to_left" onClick={() => toLeft()}>
        <Arrow className="icon" />
      </div>
      <div className="control to_right" onClick={() => toRight()}>
        <Arrow className="icon" />
      </div>
      {/* Images Area */}
      <div
        className="image_display"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item) => (
          <img src={item} />
        ))}
      </div>
      {/* Dot Area */}
      <div className="dot_display">
        {images.slice(1, images.length - 1).map((item, idx) => (
          <div
            className={`${
              (index === images.length - 1 || index === 0 ? 0 : index) ===
              idx + 1
                ? "active"
                : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
