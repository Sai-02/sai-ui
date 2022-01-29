// Button.stories.js|jsx

import React from "react";

import  Button  from "../components/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};
export const Primary = () => (
  <Button primary text={"something"}>
      Hi
  </Button>
  
);
Primary.storyName = "story";
