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
