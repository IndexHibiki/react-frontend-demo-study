import React, { useState, useRef } from "react";

import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import { ReactComponent as Arrow } from "./arrow.svg";
import "./style.css";

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);
  // these elements can be parameters from which use this Component
  // So you can customize your slide show
  const images = [image1, image2, image3, image1];
  const delay = 2000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    // My loop logic is that add the first image to the last of image arrays, preventing unexcepted jump from the last one to the first one
    // So need change delay to correctly display the animation
    // Just remember assert Transition Time less than delay
    var ddelay = index === images.length - 1 || index === 0 ? delay / 2 : delay;
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => {
          console.log(234);
          if (prevIndex === images.length - 1) {
            document.getElementById("image_display").className = "image_idle";
            return 0;
          } else {
            document.getElementById("image_display").className =
              "image_dynamic";
            return prevIndex + 1;
          }
        }),
      ddelay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slide_show">
      <div
        className="control to_former"
        onClick={() => {
          setIndex(
            index === 0 || index === 1 ? images.length + index - 2 : index - 1
          );
        }}
      >
        <Arrow className="icon" />
      </div>
      <div
        className="control to_latter"
        onClick={() => {
          setIndex(index === images.length - 1 ? 0 : index + 1);
        }}
      >
        <Arrow className="icon" />
      </div>
      {/* Images Area */}
      <div
        className="image_dynamic"
        id="image_display"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item) => (
          <img src={item} />
        ))}
      </div>
      {/* Dot Area */}
      <div className="dot_display">
        {images.slice(0, images.length - 1).map((item, idx) => (
          <div
            className={`${
              (index === images.length - 1 ? 0 : index) === idx ? "active" : ""
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
