import React from "react";

const Render = (prop) => {
  const { themeColor, text } = prop;

  console.log(themeColor);

  return (
    <div
      className="render"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: `${themeColor}`,
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "20vw", color: "white" }}>
        {text}
      </h1>
    </div>
  );
};

export default Render;
