module.exports = {
    env: {
        es2024: true,
        node: true
    },
    extends: [
        'airbnb-base'
    ],
    overrides: [
        {
            files: [
                './scripts/*.js',
                './*.js'
            ],
            rules: {
                'import/no-extraneous-dependencies': [
                    0
                ],
                'no-console': [
                    0
                ]
            }
        }
    ],
    plugins: [
        'sort-destructure-keys'
    ],

    rules: {
        'array-bracket-newline': [
            'error',
            {
                minItems: 1
            }
        ],
        'array-element-newline': [
            'error',
            {
                minItems: 1
            }
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        curly: [
            'error',
            'all'
        ],
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: false,
                    order: 'asc'
                },
                groups: [
                    'external',
                    'builtin',
                    'parent'
                ],
                'newlines-between': 'always'
            }
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': [
            0
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],
        'max-len': [
            0
        ],
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        'no-extra-boolean-cast': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-underscore-dangle': [
            0
        ],
        'object-curly-newline': [
            'error',
            {
                minProperties: 1
            }
        ],
        'object-property-newline': [
            'error',
            {
                allowMultiplePropertiesPerLine: false
            }
        ],
        'sort-destructure-keys/sort-destructure-keys': [
            2,
            {
                caseSensitive: false
            }
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true
            }
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: true
            }
        ]
    }
};
