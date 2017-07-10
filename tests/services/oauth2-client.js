/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;

class OAuth2Client {

    constructor($oauth2Options) {
        this.$oauth2Options = $oauth2Options;
    }

    redirect(request, response) {
        var data = this.$oauth2Options.getAuthorizationCode(request.query.code);
        Object.assign(data, request.query)
        response.send({ request: request, statusCode: 200, content: data });
    }
};

exports = module.exports = OAuth2Client;
