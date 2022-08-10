import pkg from "./package.json";
import tsOptions from "./tsconfig.json";

import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

const external = ["typescript", "rollup"];

const config = [
  {
    input: "./src/index.js",
    output: [
      { file: pkg.exports.import, format: "es" },
      {
        file: pkg.exports.require,
        format: "commonjs",
        exports: "named",
        plugins: [terser()]
      },
      {
        file: pkg.exports.basic,
        format: "commonjs",
        exports: "named",
        plugins: [terser()]
      },
      {
        file: pkg.exports.iife,
        format: "iife",
        name: "TranslationaryDom",
        plugins: [terser()]
      }
    ],
    plugins: [typescript(tsOptions.compilerOptions), nodeResolve()],
    external
  },
  {
    input: "./src/types/index.d.ts",
    output: [{ file: "dist/t.d.ts", format: "es" }],
    plugins: [dts()]
  }
];

export default config;
