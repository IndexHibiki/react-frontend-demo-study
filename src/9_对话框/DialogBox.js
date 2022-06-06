import React, { Children } from "react";

import "./style.css";

const DialogBox = (prop) => {
  const { dialogInfo } = prop;

  const onMarginClickHandler = (e) => {
    if (e.target.className === "dialog_box") {
      dialogInfo.onCancelHandler();
    }
  };

  return (
    <div className="dialog_box" onClick={onMarginClickHandler}>
      <div className="dialog_block">
        <div className="dialog_content">
          <h3>{dialogInfo.content}</h3>
        </div>
        <div className="dialog_control">
          <button onClick={dialogInfo.onOKHandler}>OK</button>
          <button onClick={dialogInfo.onCancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
