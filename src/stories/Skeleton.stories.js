import React from "react";
import Skeleton from "../components/Skeleton";
export default {
  title: "Skeleton",
  component: Skeleton,
};
export const Primary = () => (
  <Skeleton
    variant={"circle"}
    customStyles={{
      width: "5rem",
      height: "5rem",
    }}
  />
);
Primary.storyName = "Skeleton";
