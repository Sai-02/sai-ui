import React from "react";
import Tooltip from "../components/Tooltip";
export default {
  title: "Tooltip",
  component: Tooltip,
};
export const Primary = () => (
  <div
    className=""
    style={{
      display: "flex",
    }}
  >
    <Tooltip />
  </div>
);
Primary.storyName = "Tooltip";
