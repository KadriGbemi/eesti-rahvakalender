module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-undef": 0,
    "no-console": "warn",
    "react/prop-types": ["error", { skipUndeclared: true }]
  }
};
