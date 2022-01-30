import React from "react";
import "./Skeleton.css";
const Skeleton = ({ variant, customStyles }) => {
  return (
    <div
      className={`sui-skeleton 
      ${variant == "text" ? "sui-skeleton-text" : ""} 
      ${variant == "rectangle" ? "sui-skeleton-rectangle" : ""}
      ${variant == "circle" ? "sui-skeleton-circle" : ""}
      `}
      style={{
        ...customStyles,
      }}
    ></div>
  );
};
export default Skeleton;
