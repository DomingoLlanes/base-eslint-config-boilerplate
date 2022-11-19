module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint-config-codely"],
  plugins: ["editorconfig"],
  rules: {
    // Rules override
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false }],
  },
  overrides: [
    {
      files: ["tests/*.spec.js"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
      ],
    },
  ],
};
