import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

//Enable while development
platformBrowserDynamic().bootstrapModule(AppModule);


//Enable while deployment
//let boot = document.addEventListener('DOMContentLoaded', () => {
//    platformBrowserDynamic().bootstrapModule(AppModule);
//});

//module.exports = boot;
