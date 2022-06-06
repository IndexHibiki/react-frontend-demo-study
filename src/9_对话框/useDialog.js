import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import DialogBox from "./DialogBox";

const useDialog = (
  onOutsideClose = true,
  className = "",
  rootContainer = document.body,
  defaulteShow = false
) => {
  const [isShow, setIsShow] = useState(defaulteShow);

  const Dialog = useCallback(
    ({ dialogInfo }) => {
      if (!isShow) {
        return null;
      }

      return createPortal(<DialogBox dialogInfo={dialogInfo} />, rootContainer);
    },
    [isShow]
  );

  const onShowDialogHandler = () => {
    setIsShow(true);
  };

  const onCloseDialogHandler = () => {
    setIsShow(false);
  };

  return {
    Dialog,
    isShow,
    onShowDialogHandler,
    onCloseDialogHandler,
  };
};

export default useDialog;
