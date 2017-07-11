/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const OAuth2Service = require("../../lib/qwebs-oauth2");
const DataError = require("qwebs").DataError;


//ONLY for TEST
class MyOAuth2Service extends OAuth2Service {
    constructor($oauth2Options) {
        super($oauth2Options);
        
    }
}

exports = module.exports = MyOAuth2Service;