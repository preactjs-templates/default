# preact-default-boilerplate

![Lighthouse-Badge](https://img.shields.io/badge/lighthouse-100%2F100-brightgreen.svg)

## Documentation
- This is the default template for [preact-cli](https://github.com/developit/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

```bash
$ npx preact-cli create default my-project
$ cd my-project
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Commands

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass JavaScript files using ESLint

- `npm run test`: Run Jest and Enzyme with [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for your tests

### How to Test

The `default` template provides a basic test setup with Jest, Enzyme, and [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure). You are free to change Enzyme with any other testing library (eg. [Preact Testing Library](https://testing-library.com/docs/preact-testing-library/intro)).

You can run all additional Jest CLI commands with the `npm run test` command as described in the [Jest docs](https://facebook.github.io/jest/docs/en/cli.html#using-with-npm-scripts). For example, running jest in watch mode would be :

- `npm run test -- --watch` instead of  `jest --watch `

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `preact-cli`:

``` bash
preact create username/repo my-project
```
