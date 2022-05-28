import React, { useState } from "react";

import "./style.css";

const TurnTable = () => {
  // You can pass the Datas as a parameter
  // name: means the Text showed on each fan shape
  // size: how many degrees this Text will get
  const datas = [
    {
      name: "AAA",
      size: 2,
    },
    {
      name: "BBB",
      size: 1,
    },
    {
      name: "CCC",
      size: 3,
    },
    {
      name: "DDD",
      size: 2,
    },
    {
      name: "EEE",
      size: 4,
    },
    {
      name: "FFF",
      size: 1,
    },
    {
      name: "GGG",
      size: 5,
    },
    {
      name: "HHH",
      size: 1,
    },
  ];

  const backgroundColors = [];
  for (let i = 0; i < datas.length; i++) {
    backgroundColors.push(
      "rgb(" +
        Math.random() * 255 +
        ", " +
        (50 + Math.random() * 205) +
        ", " +
        Math.random() * 255 +
        ")"
    );
  }

  var sizeSums = [];
  datas.map((item) => {
    if (sizeSums.length === 0) {
      sizeSums.push(item.size);
    } else {
      sizeSums.push(sizeSums[sizeSums.length - 1] + item.size);
    }
  });

  var skewDegrees = [];
  datas.map((item) => {
    skewDegrees.push(
      90 - 360 * (item.size / sizeSums[sizeSums.length - 1]) > 0
        ? 90 - 360 * (item.size / sizeSums[sizeSums.length - 1])
        : 270 - 360 * (item.size / sizeSums[sizeSums.length - 1])
    );
  });

  const [rotateDegree, setRotateDegree] = useState(0);
  // const [rotateTime, setRotateTime] = useState(3000);

  const onTurnHandler = () => {
    const turnTable = document.getElementsByClassName("circle")[0];
    const rotateDegree = Math.floor(Math.random() * 1080) + 1080;

    // // setRotateTime(0);
    // turnTable.style.transition = "all " + 0 + "ms ease-out";
    // setRotateDegree(0);

    setTimeout(() => {
      // setRotateTime(3000);
      turnTable.style.transition = "all " + 3000 + "ms ease-out";
      setRotateDegree(rotateDegree);
    }, 1);
  };

  const onResetHandler = () => {
    const turnTable = document.getElementsByClassName("circle")[0];
    turnTable.style.transition = "all " + 0 + "ms ease-out";
    setRotateDegree(0);
    // setRotateTime(0);
  };

  return (
    <div className="turn_table">
      <button onClick={onTurnHandler}>Gacha</button>
      <button onClick={onResetHandler}>Reset</button>

      <ul
        className="circle"
        style={{
          transform: `rotate(${rotateDegree}deg)`,
          // transition: `all ${rotateTime}ms ease-out`,
        }}
      >
        {datas.map((item, idx) => (
          <li
            style={{
              transform: `rotate(${
                (idx === 0 ? 0 : sizeSums[idx - 1] * 360) /
                sizeSums[sizeSums.length - 1]
              }deg) skewY(-${skewDegrees[idx]}deg)`,
            }}
          >
            <div
              className="text"
              style={{
                transform: `skewY(${skewDegrees[idx]}deg) rotate(${
                  Math.abs(skewDegrees[idx] - 90) / 2
                }deg)`,
                backgroundColor: backgroundColors[idx],
              }}
            >
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TurnTable;
