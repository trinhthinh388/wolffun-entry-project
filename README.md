<p align="center">
  <img src="./assets/img/hs_logo.png" alt="Thetan Market" height="130"/>
</p>

<p align="center">
  <a href="https://marketplace.thetanarena.com" alt="Production">
    <img src="https://img.shields.io/badge/production-blue" />
  </a>
  <a href="https://uat.marketplace.thetanarena.com" alt="UAT">
    <img src="https://img.shields.io/badge/uat-orange" />
  </a>
  <a href="https://theta-market-nine.vercel.app/" alt="Staging">
    <img src="https://img.shields.io/badge/staging-yellow" />
  </a>
</p>

## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisite

Make sure you have `node`, `yarn` all installed globally.

- Make sure you installed Node.
  - Run `node -v` in terminal to see whether you have Node installed and its current version.
  - Please [install/update Node](https://nodejs.org/en/download/) to version 14 or above.
- Make sure you installed Yarn.
  - Run `yarn -v` in terminal to see whether you have Yarn installed and its current version.
  - If you are not, follow [this guide](https://classic.yarnpkg.com/en/docs/install) to get Yarn installed

### Install dependencies

```sh
yarn install
```

This will help you install dependencies for all packages.

### Start local development

- Start dev server

```sh
yarn dev
```

Open http://localhost:8080 in your browser

- Linting & Testing

```sh
yarn lint
yarn typecheck
yarn test
```
