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

        // Object.getOwnPropertyNames($oauth2Model.__proto__).forEach(p => {
        //     if (typeof $oauth2Model[p] === "function")
        //         $oauth2Model[p] = $oauth2Model[p].bind($oauth2Model);
        // })

        this.oauth = new OAuthServer($oauth2Options);
    }

    /* HANDLERS */

    //POST /oauth/token
    token(request, response) {
        return this.token(request, response).then(content => {
            return response.send({ request: request, content: content });
        });
    }

    //GET /secret
    secret(request, response) {
        return this.authorize(request, response).then(content => {
            return response.send({ request: request, content: content });
        }).catch(error => {
            return response.send({ statusCode: 500, request: request, content: error });
        });
    }

    /* SERVICE */

    authenticate(request, response) {
        return Promise.resolve().then(() => {
            try {
                let req = new Request(request);
                let res = new Response(response);
                return this.oauth.authenticate(req, res);
            }
            catch(error) {
                throw new DataError(error);
            }
        });
    };

    authorize(request, response) {
        return Promise.resolve().then(() => {
            try {
                let req = new Request(request);
                let res = new Response(response);
                return this.oauth.authorize(req, res).then(code => {
                    response.send({ request: request, statusCode: res.status, headers: res.headers });
                }).catch(error => {
                    response.send({ request: request, statusCode: error.status, content: error });
                });
            }
            catch(error) {
                throw new DataError(error);
            }
        });
    };

    token(request, response) {
        return Promise.resolve().then(() => {
            try {
                let req = new Request(request);
                let res = new Response(response);
                return this.oauth.token(req, res);
            }
            catch(error) {
                throw new DataError(error);
            }
        });
    };
};

exports = module.exports = OAuth2Service;
