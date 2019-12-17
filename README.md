<p align="center">
  <a href="https://www.bitmovin.com">
    <img alt="Bitmovin TypeScript/JavaScript API SDK Header" src="https://cdn.bitmovin.com/frontend/encoding/openapi-clients/readme-headers/ReadmeHeader_JS.png" >
  </a>

  <h4 align="center">
    TypeScript/JavaScript API SDK which enables you to seamlessly integrate the Bitmovin API into your projects.
  </h4>
  <p align="center">
    <a href="https://badge.fury.io/js/%40bitmovin%2Fapi-sdk"><img src="https://badge.fury.io/js/%40bitmovin%2Fapi-sdk.svg" alt="npm version" height="18"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></img></a>
  </p>
</p>

Using this API client requires an active account.

> Don't have an account yet? [Sign up for a free Bitmovin trial plan](https://dashboard.bitmovin.com/signup)!

For full documentation of all available API endpoints, see the [Bitmovin API reference](https://bitmovin.com/docs).

## Installation
------------

``` bash
npm install @bitmovin/api-sdk@1.31.0
```

## Initialization
----------

### Node

Using ES6 `import`
```es6
import BitmovinApi from '@bitmovin/api-sdk';

const bitmovinApi = new BitmovinApi({apiKey: '<YOUR_API_KEY>'});
```

With `require`
```js
exports.__esModule = true;
const BitmovinApi = require('@bitmovin/api-sdk')["default"];

const bitmovinApi = new BitmovinApi({apiKey: '<YOUR_API_KEY>'});
```

### Browser

Use `@bitmovin/api-sdk/dist/bitmovin-api-sdk.browser.js` or `bitmovin-api-sdk.browser.min.js` for the minified version.

### ES5 with Modules (CommonJS)

Import `@bitmovin/api-sdk/dist/index.js`.

### Types

- Typescript (`@bitmovin/api-sdk/dist/index.d.ts`)

## Examples
You can find sample workflow scripts in the [Bitmovin API SDK examples](https://github.com/bitmovin/bitmovin-api-sdk-examples) repository.

# Previous API Client (Legacy)

`bitmovin-api-sdk-javascript` is the latest Bitmovin API client for TypeScript / JavaScript. It guarantees 100% specification conformity at any given time and access to all features of the API as soon as they are released. 

However, if you need to use the previous version for legacy reasons, you can still find it at [bitmovin-javascript](https://github.com/bitmovin/bitmovin-javascript). 
