import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ButtonNavgation = (prop) => {
  const { routes } = prop;
  const buttons_one_line = 2;

  const onShowHandler = (idx) => {
    const navBlock = document
      .getElementsByClassName("button_nav_block")
      [idx].getBoundingClientRect();

    const briefShow = document.getElementsByClassName("brief_show")[idx];

    const top = navBlock.top + navBlock.height;
    const left = navBlock.left;

    briefShow.style.display = "";
    briefShow.style.top = top + "px";
    briefShow.style.left = left + "px";
  };

  const onHideHandler = (idx) => {
    const briefShow = document.getElementsByClassName("brief_show")[idx];

    briefShow.style.display = "none";
  };

  return (
    <div className="button_navigation">
      {routes.map((item, idx) => (
        <div className="button_nav_block">
          <Link
            to={item.path}
            onMouseOver={() => onShowHandler(idx)}
            onMouseLeave={() => onHideHandler(idx)}
          >
            <h2>{item.name}</h2>
          </Link>
          <div className="brief_show" style={{ display: "none" }}>
            <img src={item.show} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonNavgation;
