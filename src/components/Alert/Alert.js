import React, { useEffect } from "react";
import "./Alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faTriangleExclamation,
  faCircleInfo,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const Alert = ({ text, open, customStyles, closeAlert, type, duration }) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        closeAlert();
      }, 2000);
    }
  }, [open]);
  const getBGColor = () => {
    if (type === "error") return "rgb(243, 226, 226)";
    if (type === "warning") return "rgb(247, 232, 212)";
    if (type === "info") return "rgb(215, 234, 241)";
    if (type === "success") return "rgb(237, 247, 237)";
    return "rgb(255, 224, 224)";
  };
  const getTextColor = () => {
    if (type === "error") return "rgb(95, 33, 32)";
    if (type === "warning") return "rgb(102, 60, 0)";
    if (type === "info") return "rgb(5, 73, 104)";
    if (type === "success") return "rgb(26, 82, 28)";
    return "rgb(95, 33, 32)";
  };
  const getIcon = () => {
    if (type === "error")
      return (
        <div className="sui-error-alert-icon">
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>
      );
    if (type === "warning")
      return (
        <div className="sui-warning-alert-icon">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
      );
    if (type === "info")
      return (
        <div className="sui-info-alert-icon">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      );
    if (type === "success")
      return (
        <div className="sui-success-alert-icon">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      );
    return (
      <div className="sui-error-alert-icon">
        <FontAwesomeIcon icon={faCircleExclamation} />
      </div>
    );
  };
  return (
    <div className="sui-alert-component-container">
      <div
        className="sui-alert-component"
        style={{
          display: !open ? "none" : "",
          top: "2rem",
          backgroundColor: getBGColor(),
          color: getTextColor(),
          ...customStyles,
        }}
      >
        {getIcon()}
        <div className="">{text}</div>
      </div>
    </div>
  );
};

export default Alert;
