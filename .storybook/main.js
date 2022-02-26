module.exports = {
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: [
    "../src/stories/Skeleton.stories.js",
    "../src/stories/Modal.stories.js",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
};
