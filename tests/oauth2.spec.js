/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict"

const setup = require("./setup");
const Client = require("qwebs").Client;

describe("OAuth2", () => {

    beforeAll(setup.run.bind(setup));

    it("config error", done => {
        let client = new Client();
        return client.get({ url: "http://localhost:3000/secret" }).then(res => {
            expect(res.statusCode).toEqual(200);
        }).then(done).catch(fail);
    }, 30000);
});
