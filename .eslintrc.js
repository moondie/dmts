module.exports = {
    "root": true,
    "env": {
        "node": true,
        "browser": true,
    },
    "globals": {},
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    "extends": [
        "myplugin"
    ],
    "rules": {
        "prettier/prettier": [
            "error"
        ],
    },
}
