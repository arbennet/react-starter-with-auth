# Overview
This is a basic react starter app that already has integration with a backend with authn and authz controlled by Auth0.  It is meant to be cloned to fast-track starting new apps.

In particular, it is meant to be paired with the backend template found here: https://github.com/arbennet/nest-auth0-template

# .env File
This is what the .env file should look like:
```
VITE_AUTH0_CLIENT_ID=
VITE_AUTH0_DOMAIN=
VITE_AUTH0_AUDIENCE=
VITE_AUTH0_CALLBACK_URL=
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
