module.exports = {
   extends: ['@devesharp/typescript'],
   overrides: [
      {
         files: ['*.js'],
         rules: {
            '@typescript-eslint/no-var-requires': 'off',
            'global-require': 'off',
         },
      },
      {
         files: ['*.d.ts'],
         rules: {
            'import/export': 'off',
         },
      },
   ],
   rules: {
      'import-helpers/order-imports': [
         'warn',
         {
            groups: ['/^react/', 'module', '/^@shared/', '/^@library/', ['parent', 'sibling', 'index'], /^~/],
            alphabetize: {order: 'asc', ignoreCase: true},
         },
      ],
      'react/prop-types': 'off',
      'react/no-array-index-key': 'warn',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/alt-text': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-use-before-define': [
         'warn',
         {
            functions: false,
         },
      ],
      eqeqeq: 'warn',
      'no-param-reassign': 'warn',
      'import/no-unresolved': 'off',
      'default-case': 'warn',
      'consistent-return': 'off',
      'import/extensions': [
         'error',
         'ignorePackages',
         {
            '': 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            mjs: 'never',
         },
      ],
      'react/require-default-props': ['off'],
      'jsx-a11y/no-noninteractive-element-interactions': ['off'],
      'prefer-destructuring': ['off'],
   },
   settings: {
      'import/resolver': {
         typescript: {},
         'babel-plugin-root-import': {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
         },
      },
   },
};
