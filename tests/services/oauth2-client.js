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

        var oauth = this.$oauth2Options.getAuthorization(request.query.code);
        response.send({ request: request, statusCode: 200, content: oauth });
    }
};

exports = module.exports = OAuth2Client;
