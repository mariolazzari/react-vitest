# Testing in React with Vitest

[Vite](https://vite.dev/)
[Vitest](https://vitest.dev/)
[Air b&b React](https://airbnb.io/javascript/react/)


## Setup

```sh
pnpm create vite@latest
pnpm i
pnpm dev
# vitest
pnpm add -D vitest @vitest/coverage-v8 @vitejs/plugin-react
# testing
pnpm add -D jsdom @testing-library/jest-dom @testing-library/react 
# linting
pnpm add -D prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
pnpx eslint --init
pnpm dev
```

## Unit & ssnapshot tests

```sh
pnpm test
```

## Integrating React testing

## Integration tests

- Unit test: tests single feature in isolation
- Integration test: validates integrations between multiple tests
- Integrations tests sit between unit test and end to end test