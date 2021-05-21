import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "../../../assets/icons/close.svg";

const modalRoot = document.getElementById("modal-root");

export const Modal = (props) => {
  const { children, onClose } = props;

  const handleClose = (e) => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-bg" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-btn">
          <img src={CloseIcon} alt="Close button" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
