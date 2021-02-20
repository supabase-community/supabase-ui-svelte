module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "cypress/globals": true
  },
  plugins: ['svelte3', 'cypress'],
  ignorePatterns: ["__sapper__/", "node_modules/"],
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "never"
    ]
  }
}
