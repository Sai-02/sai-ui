import React from "react";
import "./Tooltip.css";
const Tooltip = ({ children, content, position, xDistance,yDistance }) => {
  const getToolTipStyles = () => {
    if (position === "" || position == undefined) return {};
    switch (position) {
      case "top":
        return {
          top: "-10px",
        };
      case "top-left":
        return {
          top: "-10px",
          left: "-24px",
        };
      case "top-right":
        return {
          top: "-10px",
          right: "-24px",
        };
      case "left":
        return {
          left: "calc(-100% - 10px)",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "left-top":
        return {
          left: "calc(-100% - 10px)",
          top: "-100%",
        };
      case "left-bottom":
        return {
          left: "calc(-100% - 10px)",
        };
      case "right":
        return {
          right: "calc(-100% - 10px)",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "right-bottom":
        return {
          right: "calc(-100% - 10px)",
        };
      case "right-top":
        return {
          right: "calc(-100% - 10px)",
          top: "-100%",
        };
    }
  };
  return (
    <span className="sui-tooltip-wrapper">
      <p className="sui-tooltip-text">{children}</p>
      <div
        className="sui-tooltip"
        style={{
          ...getToolTipStyles(),
        }}
      >
        {content}
      </div>
    </span>
  );
};

export default Tooltip;
