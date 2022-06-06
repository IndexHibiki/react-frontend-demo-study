import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CMD } from "./cmd.svg";

import "./style.css";
import useCommand from "./useCommand";

const CommandStyleHomepage = (prop) => {
  const { projects } = prop;

  const data = [
    {
      name: "projects",
      type: "router",
      router: projects,
    },
    {
      name: "github",
      type: "link",
      link: "https://github.com/IndexHibiki",
    },
    {
      name: "twitter",
      type: "link",
      link: "https://twitter.com/hibiki807",
    },
  ];

  const { commandLines, commandExecute } = useCommand(data);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    setTimeout(() => {
      commandExecute("ls");
    }, 500);
  }, []);

  useEffect(() => {}, commandLines);

  return (
    <div className="command_style_homepage">
      <div className="command_block">
        <div className="head">
          <CMD />
          Frontend Demo Study
        </div>
        <div className="command">
          {commandLines.map(
            (item) =>
              ({
                command_line: (
                  <div className="command_line">
                    {item.text}
                    {item.path && <Link to={item.path}>{item.route}</Link>}
                  </div>
                ),
                blank: <div className="blank"></div>,
                nav: (
                  <div className="nav">
                    {item.navs &&
                      item.navs.map((navItem) => (
                        <div
                          className="nav_item"
                          onClick={() => commandExecute(navItem)}
                        >
                          {navItem}
                        </div>
                      ))}
                  </div>
                ),
              }[item.type])
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandStyleHomepage;
