/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict"

const setup = require("./setup");
const Client = require("qwebs").Client;
const client = new Client();

//https://aaronparecki.com/oauth-2-simplified/

describe("OAuth2", () => {

    beforeAll(setup.run.bind(setup));

    it("get secret", done => {   
        return client.get({ url: "http://localhost:3000/secret?response_type=code&client_id=user&redirect_uri?http://localhost:3000/redirect", json:true }).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.authorizationCode).not.toBeUndefined();
        }).catch(fail).then(done);
    }, 30000);

    // it("get secret with state", done => {   
    //     return client.get({ url: "http://localhost:3000/secret?response_type=code&client_id=user&redirect_uri?http://localhost:3000/redirect&access_token=1234&state=mycode", json:true }).then(res => {
    //         expect(res.statusCode).toEqual(200);
    //         expect(res.body.authorizationCode).not.toBeUndefined();
    //         expect(res.body.state).toEqual("mycode"); //client side verification
    //     }).catch(fail).then(done);
    // }, 30000);

    // it("get an acess token", done => {   
    //     return client.get({ url: "http://localhost:3000/secret?response_type=code&client_id=user&redirect_uri?http://localhost:3000/redirect&access_token=1234&state=mycode", json:true }).then(res => {
    //         expect(res.statusCode).toEqual(200);
    //         expect(res.body.authorizationCode).not.toBeUndefined();
    //         expect(res.body.state).toEqual("mycode"); //client side verification

    //         let form = {
    //             client_id: "user",
    //             client_secret: "password",
    //             grant_type: "authorization_code",
    //             code: res.body.authorizationCode,
    //             redirect_uri: "http://localhost:3000/redirect"
    //         }
    //         return client.post({ url: `http://localhost:3000/oauth/token`, form: form, json: true }).then(res => {
    //             expect(res.statusCode).toEqual(200);
    //             expect(res.body.accessToken).not.toBeUndefined();
    //         });
    //     }).catch(fail).then(done);
    // }, 30000);


    // it("get secret", done => {
    //     let options = {
    //         url: "http://localhost:3000/verify",
    //         auth: {
    //             bearer: '1234'  //access token
    //         },
    //         json: true
    //     }
    //     return client.get(options).then(res => {
    //         expect(res.statusCode).toEqual(200);
    //         expect(res.body.accessToken).not.toBeUndefined();
    //         expect(res.body.user).not.toBeUndefined();
    //     }).catch(fail).then(done);
    // }, 30000);
});

