module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-console': 'error',
        'no-irregular-whitespace': 'error',
        'no-unused-vars': 'error',
        'eqeqeq': 'error',
        'space-before-function-paren': ['error', 'always']
    }
}
