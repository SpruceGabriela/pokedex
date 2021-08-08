module.exports = {
  extends: ['airbnb-typescript'],
  plugins: [
    "react"
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json']
  },
  rules: {
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
  }
};
