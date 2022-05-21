import React, { useState, useEffect } from "react";

import "./style.css";

import { ReactComponent as ArrowDown } from "./arrow_down.svg";
// import { ReactComponent as ArrowUp } from "./arrow_up.svg";

/**
 * Unfolding Downward
 *
 */
const SlideUnfoldDown = () => {
  // const headHeight = 6;
  // const detailNormalHeight = 10;
  // const detailUnfoldedHeight = 30;

  const content = {
    head: "This is for test",
    detail1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum tenetur molestiae quod est minima ducimus exercitationem? Fugit officia veritatis dolorem pariatur beatae nobis maxime, quisquam facere maiores cum natus omnis recusandae enim accusantium illo officiis saepe facilis quam eos exercitationem incidunt nulla? Illum modi eos cupiditate magni facere quisquam.",
    detail2:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, qui nisi rerum dicta ipsam eligendi explicabo obcaecati rem architecto maxime odit impedit facere nulla accusantium inventore sed fuga numquam magni optio sapiente ex corporis, itaque, temporibus a! Necessitatibus, ducimus facilis.",
    detail3:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla commodi id velit inventore reiciendis ipsa suscipit doloremque, cumque aspernatur atque aperiam temporibus vel sit sapiente repellendus ullam praesentium! Vel.",
    detail4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias provident quae temporibus, illum nostrum, recusandae pariatur magni magnam ullam maxime sapiente neque ab placeat esse ad maiores. Id doloremque cupiditate officiis recusandae perspiciatis nostrum maxime, iure iusto autem? Rerum eius libero autem, veritatis odio molestias deserunt mollitia optio suscipit temporibus!",
  };

  const [isUnfold, setIsUnfold] = useState(false);

  useEffect(() => {
    if (isUnfold === true) {
      document.getElementsByClassName("detail")[0].className =
        "detail detail_active";
      document.getElementsByClassName("control")[0].className =
        "control control_active";
      /**
       * Change CSS by JS alternatively, instead of changing ClassName
       */
      // document.getElementsByClassName("detail")[0].style.height =
      //   detailUnfoldedHeight + "vh";
      // document.getElementsByClassName("detail")[0].style.overflowY = "scroll";
      // document.getElementsByClassName("control")[0].style.top =
      //   headHeight + detailUnfoldedHeight + "vh";
    } else {
      document.getElementsByClassName("detail")[0].className =
        "detail detail_idle";
      document.getElementsByClassName("control")[0].className =
        "control control_idle";
      // document.getElementsByClassName("detail")[0].style.height =
      //   detailNormalHeight + "vh";
      // document.getElementsByClassName("detail")[0].style.overflow = "hidden";
      // document.getElementsByClassName("control")[0].style.top =
      //   headHeight + detailNormalHeight + "vh";
    }
  }, [isUnfold]);

  return (
    <div className="slide_unfold_down">
      <div className="head">
        <h1>{content.head}</h1>
      </div>
      <div className="detail">
        <h3>{content.detail1}</h3>
        <h3>{content.detail2}</h3>
        <h3>{content.detail3}</h3>
        <h3>{content.detail4}</h3>
        <h3>{content.detail3}</h3>
      </div>
      <div
        className="control"
        onClick={() => {
          setIsUnfold(!isUnfold);
        }}
      >
        <ArrowDown className="control_icon" />
      </div>
    </div>
  );
};

export default SlideUnfoldDown;
