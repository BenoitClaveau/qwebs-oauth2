/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;

class OAuth2Options {

    constructor() {

        //OPTIONAL 
        //this.accessTokenLifetime: 4 * 60 * 60
        //this.allowBearerTokensInQueryString = false;
        this.model = {
            getAccessToken: this.getAccessToken.bind(this),
            getClient: this.getClient.bind(this),
            getRefreshToken: this.getRefreshToken.bind(this),
            getUser: this.getUser.bind(this),
            saveToken: this.saveToken.bind(this),
        }
    }

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
