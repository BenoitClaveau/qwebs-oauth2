# qwebs-oauth2
[OAuth2](https://github.com/oauthjs/node-oauth2-server) service for [Qwebs server](https://www.npmjs.com/package/qwebs).

 [![NPM][npm-image]][npm-url]
 [![Build Status][travis-image]][travis-url]
 [![Coverage Status][coveralls-image]][coveralls-url]

## Features

  * [Qwebs](https://www.npmjs.com/package/qwebs)
  * [OAuth2](https://github.com/oauthjs/node-oauth2-server)
  * Singleton

## Define OAuth2 routes in routes.json

```routes.json
{
  "services": [
    { "name": "$oauth2-model", "location": "./my-oauth2-model" }
    { "name": "$oauth2", "location": "qwebs-oauth2" }
  ],
  "locators": [
      { "post": "/oauth/token", "service": "$oauth2", "method": "token" };
      { "get": "/secret", "service": "$oauth2", "method": "secret" }
  ]
}
```

## Installation

```bash
$ npm install qwebs-oauth2
```

## Test

To run our tests, clone the qwebs-oauth2 repo and install the dependencies.

```bash
$ git clone https://github.com/BenoitClaveau/qwebs-oauth2 --depth 1
$ cd qwebs-oauth2
$ npm install
$ mongod --dbpath ./data/db
$ node.exe "..\node_modules\jasmine-node\bin\jasmine-node" --verbose tests
```

[npm-image]: https://img.shields.io/npm/v/qwebs-oauth2.svg
[npm-url]: https://npmjs.org/package/qwebs-oauth2
[travis-image]: https://travis-ci.org/BenoitClaveau/qwebs-oauth2.svg?branch=master
[travis-url]: https://travis-ci.org/BenoitClaveau/qwebs-oauth2
[coveralls-image]: https://coveralls.io/repos/BenoitClaveau/qwebs-oauth2/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/BenoitClaveau/qwebs-oauth2?branch=master
