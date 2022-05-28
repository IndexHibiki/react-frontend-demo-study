import React, { useEffect } from "react";

import "./style.css";

const RowScrollGallery = () => {
  const row_num = 4;
  const image_num = 99;
  const move_vw_per_second = -12;
  const rotate_degree = -10;

  let images = [];
  for (let i = 0; i < image_num; i++) {
    images.push({
      width: 180 + Math.random() * 120 + "px",
      backgroundColor:
        "rgb(" +
        Math.random() * 255 +
        ", " +
        Math.random() * 255 +
        ", " +
        Math.random() * 255 +
        ")",
    });
  }

  let rows = [];
  const image_num_per_row = Math.ceil(image_num / row_num);
  for (let idx = 0; idx < images.length; ) {
    rows.push(images.slice(idx, (idx += image_num_per_row)));
  }

  useEffect(() => {
    const gallery = document.getElementsByClassName("gallery")[0];

    const moveSpeed = move_vw_per_second / 1000;
    let currentTranslate = -3;
    setInterval(() => {
      currentTranslate += moveSpeed;
      gallery.style.transform = `skewY(${rotate_degree}deg) translate(${currentTranslate}vw)`;
    }, 1);
  }, []);

  return (
    <div className="row_scroll_gallery">
      <div
        className="gallery"
        style={{ transform: `skewY(${rotate_degree}deg)` }}
      >
        {rows.map((row) => (
          <div
            className="row"
            style={{ transform: `skewX(${-rotate_degree}deg)` }}
          >
            {row.map((image) => (
              <div className="image" style={image}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowScrollGallery;
