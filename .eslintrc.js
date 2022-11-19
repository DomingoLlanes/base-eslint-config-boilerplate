module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint-config-codely", "plugin:sonarjs/recommended", "plugin:unicorn/recommended"],
  plugins: ["sonarjs", "unicorn", "write-good-comments"],
  rules: {
    // Rules override
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false }],
    "unicorn/prefer-module": "off",
    // Write good comments rules
    "write-good-comments/write-good-comments": "warn",
  },
  overrides: [
    {
      plugins: ["jest-formatting"],
      files: ["tests/*.spec.js"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-formatting/recommended",
      ],
    },
  ],
};
