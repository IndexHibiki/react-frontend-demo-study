import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const HomepageIntro = () => {
  const introText = "Hello, World";
  const welcomeText =
    "Welcome to my Frontend Study Website. Hope you can find some component you're interested.";

  return (
    <div className="homepage_intro">
      <div className="intro">
        <h1>{introText}</h1>
        <p>{welcomeText}</p>
      </div>
      <div className="control">
        <Link to="/">
          <h2>Get Start</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomepageIntro;
