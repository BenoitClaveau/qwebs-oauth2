/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const DataError = require("qwebs").DataError;
const OAuthServer = require('oauth2-server');

class OAuth2Service {
    constructor($oauth2Model) {
        if (!$oauth2Model) throw new DataError({ message: "$oauth2-model is not defined." });

        let options = {
            model: $oauth2Model
        }
        this.oauthServer = new OAuthServer(options);
    }

    /* HANDLERS */

    //POST /oauth/token
    token(request, response) {
        return this.authenticate(request, response).then(() => {
            return response.send({ request: request, content: content });
        });
    }

    //GET /secret
    secret(request, response) {
        return response.send({ request: request, content: content });
    }

    /* SERVICE */

    authenticate(request, response) {
        return Promise.resolve().then(() => {
            let req = new OAuthServer.Request(request);
            let res = new OAuthServer.Response(response);
            return this.server.authenticate(req, res);
        });
    };

    authorize(request, response) {
        return Promise.resolve().then(() => {
            let req = new OAuthServer.Request(request);
            let res = new OAuthServer.Response(response);
            return this.server.authorize(req, res);
        });
    };

    token(request, response) {
        return Promise.resolve().then(() => {
            let req = new OAuthServer.Request(request);
            let res = new OAuthServer.Response(response);
            return this.server.token(req, res);
        });
    };
};

exports = module.exports = OAuth2Service;
