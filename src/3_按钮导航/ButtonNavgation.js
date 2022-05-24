import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ButtonNavgation = (prop) => {
  const { routes } = prop;

  const buttons_one_line = 2;

  return (
    <div className="button_navigation">
      {routes.map((item) => (
        <div className="button_nav_block">
          <Link to={item.path}>
            <h2>{item.name}</h2>
          </Link>
          <div className="brief_show">
            <img src={item.show} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonNavgation;
