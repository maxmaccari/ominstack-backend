module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["prettier", "airbnb-base"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "class-methods-use-this": 0,
        "no-underscore-dangle": 0,
        "func-names": 0,
        "no-param-reassign": 1,
    }
};