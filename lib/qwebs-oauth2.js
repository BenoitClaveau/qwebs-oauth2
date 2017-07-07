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
    constructor($oauth2Model) {
        if (!$oauth2Model) throw new DataError({ message: "$oauth2-model is not defined." });

        let options = {
            model: $oauth2Model
        }
        this.oauth = new OAuthServer(options);
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
                return this.oauth.authorize(req, res);
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
