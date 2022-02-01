import React from "react";
import Skeleton from "../components/Skeleton";
export default {
  title: "Skeleton",
  component: Skeleton,
};
export const Primary = () => (
  <div
    className=""
    style={{
      display: "flex",
    }}
  >
    <Skeleton width="10" height="10" variant={"circle"} />
    <div
      className=""
      style={{
        display: "flex",
        gap: "0.5rem",
        flexDirection: "column",
        marginLeft: "1rem",
      }}
    >
      <Skeleton variant={"text"} width={"15"} />
      <Skeleton variant={"text"} width={"13"} />

      <Skeleton variant={"text"} width={"8"} />
    </div>
  </div>
);
Primary.storyName = "Skeleton";
