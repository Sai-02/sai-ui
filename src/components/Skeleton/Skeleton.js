import React from "react";
import propTypes from "prop-types";
import "./Skeleton.css";

const Skeleton = ({ variant, customStyles, width, height, customClasses }) => {
  return (
    <span
      className={`sui-skeleton   ${
        variant == "text" ? "sui-skeleton-text" : ""
      }  ${variant == "rectangle" ? "sui-skeleton-rectangle" : ""} ${
        variant == "circle" ? "sui-skeleton-circle" : ""
      } ${customClasses === undefined ? "" : customClasses} `}
      style={{
        width: width + "rem",
        height: height + "rem",
        ...customStyles,
      }}
    ></span>
  );
};
Skeleton.propTypes = {
  variant: propTypes.oneOfType(
    ["circle", "rectangle", "text"],
    propTypes.string
  ),
  width: propTypes.string,
  height: propTypes.string,
  customStyles: propTypes.object,
  customClasses: propTypes.string,
};
export default Skeleton;
