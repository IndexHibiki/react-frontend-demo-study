import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const EnlargedRouting = (prop) => {
  const { paths } = prop;
  const animeTime = 800;

  const onEnlargedRoutingHandler = (idx, path, color) => {
    const body = document.getElementsByClassName("enlarged_routing")[0];

    const routing = document.getElementsByClassName("routing")[idx];

    const routingCompo = routing.getBoundingClientRect();

    const startX = routingCompo.top + routingCompo.width / 2;
    const startY = routingCompo.left + routingCompo.height / 2;
    const startWidth = 0;
    const startHeight = 0;

    const endX = 0;
    const endY = 0;
    const endWidth = 100;
    const endHeight = 100;

    let background = document.createElement("div");
    background.style.position = "absolute";
    background.style.backgroundColor = color;
    background.style.top = startX + "px";
    background.style.left = startY + "px";
    background.style.width = startWidth + "vw";
    background.style.height = startHeight + "vh";
    background.style.transition = "all " + animeTime + "ms ease-out";

    body.append(background);

    setTimeout(() => {
      background.style.top = endX + "px";
      background.style.left = endY + "px";
      background.style.width = endWidth + "vw";
      background.style.height = endHeight + "vh";
    }, 1);
  };

  return (
    <div className="enlarged_routing">
      {paths.map((item, idx) => (
        <div
          className="routing"
          onClick={() =>
            onEnlargedRoutingHandler(idx, item.path, item.themeColor)
          }
        >
          <h1>{item.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default EnlargedRouting;
