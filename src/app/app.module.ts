import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ScribbleModule } from './scribble/scribble.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ScribbleModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
