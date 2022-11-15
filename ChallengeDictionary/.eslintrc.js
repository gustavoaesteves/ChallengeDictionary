module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      "indent": [0, 2],
      "radix": 0,
      "no-param-reassign": [0, { "props": false }],
      "prefer-const": 1,
      "max-len": [
        1,
        150,
        { "ignoreTemplateLiterals": true, "ignoreTrailingComments": true }
      ],
      "arrow-parens": [0, "as-needed"],
      "no-else-return": 1,
      "no-plusplus": 0,
      "no-unused-vars":"off",
      "no-use-before-define": 0,
      "one-var": 0,
      "padded-blocks": 0,
      "guard-for-in": 0,
      "no-restricted-syntax": 0,
      "semi": ["warn", "always"],
      "no-console": 0,
      "no-return-assign": 0,
      "@angular-eslint/component-selector": 0,
      "@angular-eslint/directive-selector": 0,
      "curly": "off",
      "no-useless-escape": 0,
      "@typescript-eslint/no-unused-expressions":"off",
      "no-cond-assign": 0,
      "no-loop-func": 0,
      "no-multiple-empty-lines": ["warn", { "maxEOF": 1, "max": 1 }],
      "no-underscore-dangle": 0,
      "no-continue": 0,
      "consistent-return": 0,
      "import/no-named-as-default": 0,
      "import/extensions": 0,
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/member-ordering": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
          "accessibility": "explicit"
        }
      ],
      "@typescript-eslint/no-inferrable-types": "off",
      "brace-style": ["off", "off"],
      "object-shorthand": "off",
      "quote-props": ["error", "consistent"]
    }
};
