import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent }   from './CustomerComponent';
import { FormsModule } from "@angular/forms"
import { GridComponent } from './GridComponent';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [CustomerComponent, GridComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModuleLibrary { }
