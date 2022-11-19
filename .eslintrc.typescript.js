module.exports = {
  extends: [
    "eslint-config-codely/typescript",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
  ],
  plugins: ["sonarjs", "unicorn", "write-good-comments"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    // Rules override
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false }],
    // Write good comments rules
    "write-good-comments/write-good-comments": "warn",
  },
  overrides: [
    {
      plugins: ["jest-formatting"],
      files: ["tests/*.spec.ts"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-formatting/recommended",
      ],
    },
  ],
};
