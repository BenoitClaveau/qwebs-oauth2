/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;

class OAuth2Model {

    getAccessToken(bearerToken) {
        throw new DataError({ message: "Not implemented" });
    }

    getClient(clientId, clientSecret) {
        throw new DataError({ message: "Not implemented" });
    }

    getRefreshToken(refreshToken) {
        throw new DataError({ message: "Not implemented" });
    }

    getUser(username, password) {
        throw new DataError({ message: "Not implemented" });
    }

    saveToken(token, client, user) {
        throw new DataError({ message: "Not implemented" });
    }
};

exports = module.exports = OAuth2Model;
