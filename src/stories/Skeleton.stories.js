import React from "react";
import Skeleton from "../components/Skeleton";
export default {
  title: "Skeleton",
  component: Skeleton,
};
export const Primary = () => (
  <Skeleton width="60" height="60" variant={"circle"} />
);
Primary.storyName = "Skeleton";
