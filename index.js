module.exports = {
    extends: 'airbnb',
    globals: {
        '$': true,
        Velocity: true,
        APP_CONSTANTS: true
    },
    rules: {
        'eol-last': 0,
        'max-len': [1, 200, 4],
        'no-param-reassign': 0, // [1, {props: false}],
        'space-before-function-paren': [
            2,
            {
                anonymous: 'always',
                named: 'never'
            }
        ],
        'object-curly-spacing': 0,
        'spaced-comment': 0,
        'comma-dangle': 0,
        indent: [
            1,
            4,
            {
                SwitchCase: 1
            }
        ],
        'no-console': 0,
        'func-names': 0,
        'new-cap': [
            2,
            {
                capIsNewExceptions: [
                    'Immutable.List',
                    'Immutable.Map',
                    'express.Router',
                    'When'
                ]
            }
        ],
        'no-unused-vars': [
            1,
            {
                args: 'after-used',
                varsIgnorePattern: '^_$|React'
            }
        ],
        'no-underscore-dangle': 0,
        'global-require': 0,
        'react/no-multi-comp': 0,
        'no-trailing-spaces': 0,
        'id-length': [
            2,
            {
                min: 2,
                exceptions: [
                    '_',
                    'e',
                    '$',
                    'i',
                    'j',
                    'k',
                    'l',
                    'n'
                ]
            }
        ],
        'react/prop-types': [
            2,
            {
                ignore: [
                    'children', 'data', 'className', 'params', 'location'
                ]
            }
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 2],
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-space-before-closing': 0,
        'react/prefer-es6-class': 0,
        'react/jsx-no-bind': 0,
        'react/no-script-url': 0,
        'no-script-url': 0,
        'no-labels': 0
    }
};

