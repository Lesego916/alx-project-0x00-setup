import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,ts,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];
