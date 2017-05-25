"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    core_1.enableProdMode();
}
//Enable while development
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//Enable while deployment
//let boot = document.addEventListener('DOMContentLoaded', () => {
//    platformBrowserDynamic().bootstrapModule(AppModule);
//});
//module.exports = boot;
