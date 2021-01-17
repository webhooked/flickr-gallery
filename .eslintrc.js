module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      alias: [["@", "./src"]],
    },
  },
};
