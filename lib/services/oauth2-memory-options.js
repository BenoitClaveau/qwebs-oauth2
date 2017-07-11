/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;

class OAuth2Options {

    constructor() {
        this.clients = [];
        this.tokens = [];
        this.authorizations = [];

        // exemple of data
        // this.clients = [
        //     { client: { id: "user" }, grants: ["authorization_code"], redirectUris: ["http://localhost:3000/redirect"] }
        // ];
        // this.tokens = [
        //     { accessToken: "1234", user: {}, accessTokenExpiresAt: moment().add(1,'days').toDate() }
        // ];

        //oauth2-server options
        this.accessTokenLifetime = 4 * 60 * 60
        this.allowBearerTokensInQueryString = true;
        this.allowEmptyState = true;
        this.model = {
            saveAuthorizationCode: this.saveAuthorizationCode.bind(this),
            getClient: this.getClient.bind(this),
            getAccessToken: this.getAccessToken.bind(this),
            getAuthorizationCode: this.getAuthorizationCode.bind(this),
            revokeAuthorizationCode: this.revokeAuthorizationCode.bind(this),
            saveToken: this.saveToken.bind(this),
        }
    }

    /* oauth2-server methods */
    getAuthorizationCode(authorizationCode) {
        return this.authorizations.filter(e => e.authorizationCode == authorizationCode).shift();
    }

    revokeAuthorizationCode(authorization) {
        return this.authorizations.splice(authorization, 1);
    }

    saveToken(token, client, user) {
        let data = Object.assign({
            client: client,
            user: user
        }, token);
        this.tokens.push(data);
        return data;
    }

    saveAuthorizationCode(token, client, user) {
        this.authorizations.push(Object.assign({
            client: client,
            user: user
        }, token));
        return token;
    }

    getClient(clientId, clientSecret) {
        return this.clients.filter(e => e.client.id == clientId).shift();
    }

    getAccessToken(bearerToken) {
        return this.tokens.filter(e => e.accessToken == bearerToken).shift();
    }
};

exports = module.exports = OAuth2Options;
