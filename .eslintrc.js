module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:flowtype-errors/recommended"
  ],
  "plugins": [
    "react",
    "flowtype"
  ],
  "settings": {
    "import/resolver": {
      "parcel": {
        "rootDir": 'src',
      }
    }
  },
  "rules": {
    "import/no-absolute-path": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/require-default-props": ["error", { forbidDefaultForRequired: false }],
    "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": true }]
  }
};
