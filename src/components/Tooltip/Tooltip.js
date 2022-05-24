import React from "react";
import "./Tooltip.css";
import propTypes from "prop-types";

const Tooltip = ({ children, content, position, xDistance, yDistance }) => {
  const getToolTipStyles = () => {
    if (position === "" || position == undefined) return {};
    switch (position) {
      case "top":
        return {
          top: `-${xDistance}`,
        };
      case "top-left":
        return {
          top: `-${xDistance}`,
          left: "-24px",
        };
      case "top-right":
        return {
          top: `-${xDistance}`,
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
Tooltip.propTypes = {
  children: propTypes.elementType,
  content: propTypes.elementType,
  position: propTypes.string,
  xDistance: propTypes.string,
  yDistance: propTypes.string,
};
Tooltip.defaultProps = {
  xDistance: "-10px",
  yDistance: "-10px",
};
export default Tooltip;
