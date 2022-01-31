import React from "react";
import propTypes from "prop-types";
import "./Skeleton.css";

const Skeleton = ({ variant, customStyles, width, height }) => {
  return (
    <div
      className={`sui-skeleton 
      ${variant == "text" ? "sui-skeleton-text" : ""} 
      ${variant == "rectangle" ? "sui-skeleton-rectangle" : ""}
      ${variant == "circle" ? "sui-skeleton-circle" : ""}
      `}
      style={{
        width: width + "px",
        height: height + "px",
        ...customStyles,
      }}
    ></div>
  );
};
Skeleton.propTypes = {
  variant: propTypes.oneOfType(
    ["circle", "rectangle", "text"],
    propTypes.string
  ),
  width: propTypes.string.isRequired,
  height: propTypes.string,
  customStyles: propTypes.object,
};
export default Skeleton;
