module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    jsx: true,
    useJSXTextNode: true
  },
  plugins: [
    '@typescript-eslint',
    "react",
    "react-hooks"
  ],
  settings: {
    react: {
      version: "999.999.999" // no latest option, 999.999.999 as a hack
    }
  },
  rules: {
    semi: ["warn", "always"],
    indent: "off",
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "react/jsx-uses-vars": 1,
    "quotes": "off",
    "@typescript-eslint/quotes": ["warn", "backtick", { avoidEscape: true }],
    "max-len": ["warn", { code: 100, ignoreComments: true }],
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": "warn",
    "no-var": "warn",
    "no-const-assign": "warn",
    "no-dupe-class-members": "warn",
    "no-duplicate-imports": ["warn", { includeExports: true }],
    "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true }],
    "prefer-const": "warn",
    "react/display-name": ["off", { "ignoreTranspilerName": true }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "function", next: "function" }
    ],
    "prefer-destructuring": [
      "warn",
      {
        array: false,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "template-curly-spacing": "warn",
    "no-dupe-args": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty": "warn",
    "no-extra-semi": "warn",
    "no-extra-parens": ["warn", "all"],
    "no-extra-boolean-cast": "warn",
    "no-func-assign": "warn",
    "no-inner-declarations": "warn",
    "no-irregular-whitespace": "warn",
    "no-sparse-arrays": "warn",
    "no-unreachable": "warn",
    "accessor-pairs": "warn",
    "block-scoped-var": "warn",
    curly: "warn",
    "default-case": "warn",
    "dot-notation": "warn",
    eqeqeq: "warn",
    "guard-for-in": "warn",
    "no-empty-pattern": "warn",
    "no-multi-spaces": ["warn", { ignoreEOLComments: true }],
    "no-new": "warn",
    "no-new-func": "warn",
    "array-bracket-newline": ["warn", { multiline: true }],
    "array-bracket-spacing": ["warn", "never"],
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    camelcase: "warn",
    "comma-dangle": [
      "warn",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "comma-spacing": ["warn", { before: false, after: true }],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never"],
    "eol-last": ["warn", "always"],
    "func-call-spacing": ["warn", "never"],
    "func-names": ["warn", "always", { "generators": "as-needed" }],
    "func-style": ["warn", "expression", { allowArrowFunctions: true }],
    "jsx-quotes": ["warn", "prefer-double"],
    "key-spacing": ["warn", { beforeColon: false }],
    "keyword-spacing": ["warn", { before: true }],
    "lines-around-comment": ["warn", { beforeBlockComment: false }],
    "no-array-constructor": "warn",
    "no-lonely-if": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
    "no-multi-assign": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
    "padded-blocks": ["warn", "never"],
    "quote-props": ["warn", "always"],
    "semi-spacing": ["warn", { before: false, after: true }],
    "semi-style": ["warn", "last"],
    "sort-vars": ["warn", { ignoreCase: true }],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": ["warn", "never"],
    "spaced-comment": ["warn", "always"],
    "switch-colon-spacing": "warn",
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};