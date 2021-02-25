module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        "sourceType": "module"
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'all',
                singleAttributePerLine: true,
                arrowParens: 'always',
            },
        ],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
