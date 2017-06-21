import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
