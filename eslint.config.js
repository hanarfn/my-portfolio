import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Prettier formatting
      "prettier/prettier": "warn",

      // ✅ Auto-sort imports
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      // Optional (saran best-practice)
      "import/order": "off",
      "import/first": "warn",
      "import/no-duplicates": "warn",
    },
  },
]);
