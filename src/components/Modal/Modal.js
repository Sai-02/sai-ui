import React from "react";
import "./Modal.css";
import propTypes from "prop-types";

const Modal = ({
  children,
  open,
  customStyles,
  customClasses,
  backgroundColor,
}) => {
  return (
    <div
      className="sai-modal-container"
      style={{
        display: open ? "" : "none",
        background:
          backgroundColor === undefined
            ? "rgba(0, 0, 0, 0.5)"
            : backgroundColor,
      }}
    >
      <div
        className={`sai-modal-component ${
          customClasses === undefined ? "" : customClasses
        }`}
        style={{
          ...customStyles,
        }}
      >
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  open: propTypes.bool,
  customStyles: propTypes.object,
  customClasses: propTypes.string,
  backgroundColor: propTypes.string,
};
export default Modal;
