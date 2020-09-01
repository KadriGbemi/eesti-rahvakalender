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
  rules: { "react/prop-types": ["error", { skipUndeclared: true }] }
};
