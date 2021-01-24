module.exports = {
  env: {
    es2020: true,
  },
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  rules: {
    "import/no-webpack-loader-syntax": "off",
    "jsx-a11y/anchor-is-valid": "off", //Doesn't play well with Next <Link> usage
  },
  overrides: [
    {
      files: ["**/components/**/*.tsx"],
      excludedFiles: ["**/*.stories.tsx"],
      rules: {
        "import/no-default-export": "warn",
      },
    },
  ],
}
