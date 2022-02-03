import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import jsx from "rollup-plugin-jsx";
import postcss from "rollup-plugin-postcss";
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
      jsx({ factory: "React.createElement" }),
      commonjs(),
      resolve(),
      terser(),
    ],
    external: ["react", "react-dom", "prop-types"],
  },
  
];
