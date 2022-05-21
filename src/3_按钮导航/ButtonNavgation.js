import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ButtonNavgation = (prop) => {
  const { routes } = prop;

  return (
    <div className="button_navigation">
      <Link to={routes.slide_show.path}>
        <h2>{routes.slide_show.name}</h2>
      </Link>
      <Link to={routes.slide_unfold.path}>
        <h2>{routes.slide_unfold.name}</h2>
      </Link>
      <Link to={routes.homepage.path}>
        <h2>{routes.homepage.name}</h2>
      </Link>
    </div>
  );
};

export default ButtonNavgation;
