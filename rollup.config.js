import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import jsx from "rollup-plugin-jsx";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        // extensions: [".css"],
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"],
        exclude: "/node_modules/",
      }),
      resolve(),
      jsx({ factory: "React.createElement" }),
      commonjs(),
      terser(),
    ],
    external: [
      "react",
      "react-dom",
      "prop-types",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/react-fontawesome",
    ],
  },
];
