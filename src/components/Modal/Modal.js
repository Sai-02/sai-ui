import React from "react";
import "./Modal.css";
import propTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useOnClickOutside } from "../../customHooks/useOnClickOutside";
const Modal = ({
  children,
  open,
  customStyles,
  customClasses,
  backgroundColor,
  fullScreen,
  backgroundScroll,
  onClose,
  closeOnFocusRemove,
}) => {
  const modalRef = useRef();
  useEffect(() => {
    if (open && !backgroundScroll) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open, backgroundScroll]);
  useOnClickOutside(modalRef, onClose,closeOnFocusRemove);
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
        } `}
        style={{
          width: fullScreen ? "100vw" : "",
          height: fullScreen ? "100vh" : "",
          ...customStyles,
        }}
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  open: propTypes.bool,
  fullScreen: propTypes.bool,
  backgroundScroll: propTypes.bool,
  customStyles: propTypes.object,
  customClasses: propTypes.string,
  backgroundColor: propTypes.string,
  onClose: propTypes.func,
};
export default Modal;
