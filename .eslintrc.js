module.exports = {
  env: {
    'node': true,
    'commonjs': true
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    // '@vue/airbnb'
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    // 'quotes': [2, 'single'],

    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'space-before-function-paren': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'comma-dangle': 'off',
      'no-param-reassign': 'off',
      'space-before-function-paren': 'off',
      'no-use-before-define': 'off',
      'consistent-return': 'off',
      'no-underscore-dangle': 'off',
      'no-nested-ternary': 'off',
      'guard-for-in': 'off',
      'no-restricted-syntax': 'off',
      'no-shadow': 'off',
      'object-shorthand': 'off',
      'arrow-parens': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-plusplus': 'off',
      'array-callback-return': 'off',
      'vue/no-use-v-if-with-v-for': 'off',
      'vue/valid-v-on': 'off',
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true,
        },
      ],
      'no-prototype-builtins': 'off',
    'no-return-assign': 'off',
    'no-bitwise': 'off',
    'no-async-promise-executor': 'off',
    'operator-assignment': 'off',
    'no-else-return': 'off',
    'no-restricted-globals': 'off',
    radix: 'off',
    'prefer-template': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'off',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    camelcase: [2, { properties: 'never' }],
    'max-lines-per-function': [
      'error',
      {
        max: 100,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    indent: ['error', 2],
    'max-depth': ['error', 3],
    'max-lines': [
      'error',
      {
        max: 800,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-params': ['error', 3],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTrailingComments: true,
      },
    ],
  },
  overrides: [
    {
        'files': ['*.vue'],
        'rules': {
            'indent': 'off'
        }
    }
]
}