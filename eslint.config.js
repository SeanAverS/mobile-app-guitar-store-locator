import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { fixupConfigAsPlugin } from "@eslint/compat"; 

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      react: fixupConfigAsPlugin(pluginReact),
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
    },
    ignores: ["app.config.js"],
  },
];