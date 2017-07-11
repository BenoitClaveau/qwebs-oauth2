/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const OAuth2MemoryOptions = require("qwebs-oauth2").OAuth2MemoryOptions;
const DataError = require("qwebs").DataError;

class OAuth2Options extends OAuth2MemoryOptions {
    constructor() {
        super();
    }
}

exports = module.exports = OAuth2Options;