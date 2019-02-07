module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": [ "error", {
      "argsIgnorePattern": "next",
      "varsIgnorePattern": "removed"
      }
    ],
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default" : 0,
    "import/no-named-as-default-member" : 0,
    "import/named" : 0,
  },
};
