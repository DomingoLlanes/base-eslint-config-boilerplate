module.exports = {
  extends: [ "eslint-config-codely/typescript" ],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    // Rules override
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false }],
  },
  overrides: [
    {
      files: ["tests/*.spec.ts"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
      ],
    },
  ],
};
