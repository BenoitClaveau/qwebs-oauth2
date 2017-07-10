/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;
const moment = require("moment");

class OAuth2Options {

    constructor() {
        this.clients = [
            { clientId: "user", grants: ["authorization_code"], redirectUris: ["http://localhost:3000/redirect"] }
        ];
        this.tokens = [
            { accessToken: "1234", user: {}, accessTokenExpiresAt: moment().add(1,'days').toDate() }
        ];

        this.authorizations = [];

        //OAuth2 options
        this.accessTokenLifetime = 4 * 60 * 60
        this.allowBearerTokensInQueryString = true;
        this.allowEmptyState = true;
        this.model = {
            saveAuthorizationCode: this.saveAuthorizationCode.bind(this),
            getClient: this.getClient.bind(this),
            getAccessToken: this.getAccessToken.bind(this),
        }
    }

    /* OAuth2 */

    saveAuthorizationCode(token, client, user) {
        this.authorizations.push({ token: token, client: client, user: user });
        return token;
    }

    getClient(clientId, clientSecret) {
        return this.clients.filter(e => e.clientId == clientId).shift();
    }

    getAccessToken(bearerToken) {
        return this.tokens.filter(e => e.accessToken == bearerToken).shift();
    }

    /* ----------------- */

    getAuthorization(authorizationCode) {
        return this.authorizations.map(e => e.token).filter(e => e.authorizationCode == authorizationCode).shift();
    }
};

exports = module.exports = OAuth2Options;
