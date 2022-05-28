import React, { useEffect } from "react";

import { ReactComponent as Cart } from "./cart.svg";

import "./style.css";

const AddToCart = () => {
  // mode = 0, the Anime Time will not be changed
  // Maybe you think the Anime in the right of the page is too slow
  // You can try Mode 1
  // mode = 1, the Horizontal Speed (xSpeed) will not be changed
  // But in this situation, the Anime in the right of the page will be too fast
  // You can try set a threshold on animeTime
  // like animeTime = animeTime < 20 ? 20 : animeTime
  const mode = 1;
  const anime_time = 40;
  const x_speed = 25;

  // for test
  const products = [
    {
      name: "Hi",
      image: require("./image1.png"),
      price: 114,
    },
    {
      name: "Bi",
      image: require("./image2.png"),
      price: 514,
    },
    {
      name: "Ki",
      image: require("./image3.png"),
      price: 19.19,
    },
    {
      name: "Hi",
      image: require("./image1.png"),
      price: 114,
    },
    {
      name: "Bi",
      image: require("./image2.png"),
      price: 514,
    },
    {
      name: "Ki",
      image: require("./image3.png"),
      price: 19.19,
    },
    {
      name: "Hi",
      image: require("./image1.png"),
      price: 114,
    },
    {
      name: "Bi",
      image: require("./image2.png"),
      price: 514,
    },
    {
      name: "Ki",
      image: require("./image3.png"),
      price: 19.19,
    },
  ];

  const onAddToCartHandler = (idx) => {
    // Get HTML Element
    const body = document.getElementsByClassName("add_to_cart")[0];

    const origin = document.getElementsByClassName("origin")[idx];

    const start_compo = origin.getBoundingClientRect();

    const cart = document.getElementsByClassName("cart")[0];

    const end_compo = cart.getBoundingClientRect();

    // Start Attribute
    const startWidth = Math.round(
      (start_compo.width * 100) / document.documentElement.clientWidth
    );
    const startHeight = Math.round(
      (start_compo.height * 100) / document.documentElement.clientWidth
    );
    const startBorderRadius = 0;
    const startX = start_compo.left;
    const startY = start_compo.top + document.documentElement.scrollTop;

    // End Attribute
    const endWidth = 2;
    const endHeight = 2;
    const endBorderRadius = 60;
    const endX = end_compo.left;
    const endY = end_compo.top + document.documentElement.scrollTop;

    // This case, I create a new one and set anime to it
    // Create Anime Element
    let adding = origin.cloneNode();
    adding.className = "adding";
    adding.style.position = "absolute";
    adding.style.width = startWidth + "vw";
    adding.style.height = startHeight + "vw";
    adding.style.borderRadius = startBorderRadius + "%";
    adding.style.left = startX + "px";
    adding.style.top = startY + "px";

    body.append(adding);

    // Because I use requestAnimationFrame, it's interval time is up to your Device
    // If you care about the speed of the anime, you need try different number to satisfy your expectation
    let animeTime = mode == 0 ? anime_time : (endX - startX) / x_speed;
    animeTime = animeTime < 20 ? 20 : animeTime;

    const initialYSpeed = -5 - Math.random() * (endX - startX) * 0.025;

    // Set the rate of change
    const widthSpeed = (endWidth - startWidth) / animeTime;
    const heightSpeed = (endHeight - startHeight) / animeTime;
    const circleSpeed = (endBorderRadius - startBorderRadius) / animeTime;
    const xSpeed = (endX - startX) / animeTime;
    console.log(animeTime);
    const yAccelerate =
      (2 * (endY - startY - initialYSpeed * animeTime)) / animeTime ** 2;

    let currentWith = startWidth;
    let currentHeight = startHeight;
    let currentBorderRadius = startBorderRadius;
    let currentX = startX;
    let currentY = startY;

    let epoch = 0;

    const cartAnime = () => {
      cart.style.transform = "scale(1.25, 1.25)";

      setTimeout(() => {
        cart.style.transform = "";
      }, 100);
    };

    const move = () => {
      if (currentWith < endWidth) {
        cartAnime();
        body.removeChild(adding);
        return;
      }

      currentWith += widthSpeed;
      currentHeight += heightSpeed;
      currentBorderRadius += circleSpeed;
      currentX += xSpeed;
      currentY += initialYSpeed + yAccelerate * epoch;

      requestAnimationFrame(() => {
        adding.style.width = currentWith + "vw";
        adding.style.height = currentHeight + "vw";
        adding.style.borderRadius = currentBorderRadius + "%";
        adding.style.left = currentX + "px";
        adding.style.top = currentY + "px";

        epoch++;
        move();
      });
    };
    move();
  };

  return (
    <div className="add_to_cart">
      <div className="commodities">
        {products.map((item, idx) => (
          <div className="product">
            <img className="origin" src={item.image} alt="" />
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
            <button onClick={() => onAddToCartHandler(idx)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default AddToCart;
