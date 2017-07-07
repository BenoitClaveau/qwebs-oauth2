/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict"

const Qwebs = require("qwebs");
const porcess = require("process")


class Setup {
    constructor() {
        process.on("unhandledRejection", error => {
            console.error(error);
            process.exit(-1);
        });

        this.$qwebs = new Qwebs({ dirname: __dirname, config: "./config.json" });
    };

    run() {
        return this.$qwebs.load();
    };
};

exports = module.exports = new Setup();
