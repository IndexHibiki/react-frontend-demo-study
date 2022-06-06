import React from "react";

import useDialog from "./useDialog";

const DialogBoxTest = () => {
  const { Dialog, isShow, onShowDialogHandler, onCloseDialogHandler } =
    useDialog();

  const dialogInfo = {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid dolor cumque minima ad laborum consectetur neque, tempore esse ex vero ipsam. Itaque quaerat, officiis hic recusandae aperiam expedita necessitatibus?",
    onOKHandler: () => {
      console.log(123);
    },
    onCancelHandler: onCloseDialogHandler,
  };

  return (
    <div className="dialog_box_test">
      <button onClick={onShowDialogHandler}>提交</button>
      <Dialog dialogInfo={dialogInfo} />
    </div>
  );
};

export default DialogBoxTest;
