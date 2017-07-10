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
        super($oauth2Options)
    }

    //add new route
    verify(request, response) {
        return this.authenticate(request, response).then(res => {
            return response.send(res);
        }).catch(error => {
            return response.send(error);
        });
    }
}

exports = module.exports = MyOAuth2Service;