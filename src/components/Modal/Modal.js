import React from "react";
import "./Modal.css";
const Modal = ({ children, open }) => {
  return (
    <div
      className="sai-modal-container"
      style={{
        display: open ? "" : "none",
      }}
    >
      <div className="sai-modal-component">{children}</div>
    </div>
  );
};

export default Modal;
