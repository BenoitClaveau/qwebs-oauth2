/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict"

const setup = require("./setup");
const Client = require("qwebs").Client;
const client = new Client();

describe("OAuth2", () => {

    beforeAll(setup.run.bind(setup));

    it("get secret", done => {   
        return client.get({ url: "http://localhost:3000/secret?response_type=code&client_id=user&redirect_uri?http://localhost:3000/redirect&access_token=1234", json:true }).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.authorizationCode).not.toBeUndefined();
        }).then(done).catch(fail);
    }, 30000);

    // it("post", done => {
    //     let model = {
    //         user: "user",
    //         password: "password"
    //     }
    //     return client.post({ url: "http://localhost:3000/oauth/token", body: model }).then(res => {
    //         expect(res.statusCode).toEqual(200);
    //     }).then(done).catch(fail);
    // }, 30000);
});
