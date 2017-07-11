/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;
const OAuthServer = require('oauth2-server');
const Request = require('oauth2-server').Request;
const Response = require('oauth2-server').Response;

class OAuth2Service {
    constructor($oauth2Options) {
        if (!$oauth2Options) throw new DataError({ message: "$oauth2-options is not defined." });
        this.oauth = new OAuthServer($oauth2Options);
    }

    /* HANDLERS */

    //POST/oauth/token
    token(request, response) {
        return this._generateToken(request, response).then(res => {
            return response.send(res);
        }).catch(error => {
            return response.send(error);
        });
    }

    //GET/secret
    secret(request, response) {
        return this._authorize(request, response).then(res => {
            return response.send(res);
        }).catch(error => {
            return response.send(error);
        });
    }

    //GET/verify
    verify(request, response) {
        return this._authenticate(request, response).then(res => {
            return response.send(res);
        }).catch(error => {
            return response.send(error);
        });
    }

    /* SERVICE */

    _authorize(request, response) {
        return Promise.resolve().then(() => {
            try {
                let req = new Request(request);
                let res = new Response(response);
                let options = { //override default behaviour
                    authenticateHandler: {
                        handle: function(req, res) {
                            return {};
                        }
                    }
                }
                return this.oauth.authorize(req, res, options).then(() => {
                    return { request: request, statusCode: res.status, headers: res.headers };
                }).catch(error => {
                    throw new DataError({ request: request, statusCode: error.status, content: error });
                });
            }
            catch(error) {
                throw new DataError(error);
            }
        });
    };

    _generateToken(request, response) {
        return Promise.resolve().then(() => {
            try {
                let req = new Request(request);
                let res = new Response(response);
                return this.oauth.token(req, res).then(content => {
                    let model = {
                        accessToken: content.accessToken,
                        accessTokenExpiresAt: content.accessTokenExpiresAt,
                        refreshToken: content.refreshToken,
                        refreshTokenExpiresAt: content.refreshTokenExpiresAt
                    }
                    return { request: request, statusCode: res.status, headers: res.headers, content: model };
                }).catch(error => {
                    throw new DataError({ request: request, statusCode: error.status, content: error });
                });
            }
            catch(error) {
                throw new DataError(error);
            }
        });
    };

    _authenticate(request, response) {
        return Promise.resolve().then(() => {
            try {
                let req = new Request(request);
                let res = new Response(response);
                return this.oauth.authenticate(req, res).then(content => {
                    return { request: request, statusCode: res.status, headers: res.headers, content: content };
                }).catch(error => {
                    throw new DataError({ request: request, statusCode: error.status, content: error });
                });
            }
            catch(error) {
                throw new DataError(error);
            }
        });
    };
};

exports = module.exports = OAuth2Service;
