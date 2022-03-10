import React, { useEffect } from "react";
import "./Alert.css";

const Alert = ({ text, open, customStyles, closeAlert, type, duration }) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        closeAlert();
      }, 2000);
    }
  }, [open]);
  return (
    <div
      className="sui-alert-component"
      style={{
        display: !open ? "none" : "",
        top: "2rem",
        // left: "50%",
        // background: "red",
        ...customStyles,
      }}
    >
      {text}
    </div>
  );
};

export default Alert;
