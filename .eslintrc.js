module.exports = {
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: [
    "react",
    "prettier"
  ],
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  rules: {
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
      {
        "usePrettierrc": true
      }
    ]
  }
};