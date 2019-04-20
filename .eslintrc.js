module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
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
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
};
