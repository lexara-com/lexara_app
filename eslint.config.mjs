import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/**", ".astro/**", "coverage/**", "node_modules/**"],
  },
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...eslint.configs.recommended,
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
];