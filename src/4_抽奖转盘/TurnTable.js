import React, { useState } from "react";

import "./style.css";

const TurnTable = () => {
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
  const [rotateTime, setRotateTime] = useState(3000);

  const onTurnHandler = () => {
    const rotateDegree = Math.floor(Math.random() * 1080) + 1080;

    setRotateTime(3000);
    setRotateDegree(rotateDegree);
  };

  const onResetHandler = () => {
    setRotateTime(0);
    setRotateDegree(0);
  };

  return (
    <div className="turn_table">
      <button onClick={onTurnHandler}>Gachya</button>
      <button onClick={onResetHandler}>Reset</button>
      <ul
        className="circle"
        style={{
          transform: `rotate(${rotateDegree}deg)`,
          transition: `all ${rotateTime}ms ease-out`,
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
