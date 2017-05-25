import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';


import { AppComponent } from './components/app.assignclubs';
import { AppServiceAssignClubs } from './services/app.service.assignclubs'

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule],
    declarations: [AppComponent ],
    bootstrap: [AppComponent],
    providers: [AppServiceAssignClubs]
})
export class AppModule { }
