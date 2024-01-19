# eslint-a11y-app

## Running plugin within this app

1. `git clone git@github.com:sklinkusch/eslint-a11y-app.git`
1. `cd eslint-a11y-app/frontend`
1. `npm ci`
1. Add `.vscode/settings.json` for VS Code
1. Reload window

## Running plugin in another app

1. `npm install eslint-plugin-jsx-a11y --save-dev`
1. Adapt the `.eslintrc` to the following structure:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2021,
    "project": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "jsx-a11y", "prettier"],
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/aria-role": "warn"
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": ["vite.config.ts", "tsconfig.json", "tsconfig.node.json"]
}
```

3. Reload the window
