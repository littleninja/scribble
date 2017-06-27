import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdGridListModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ArtGridComponent } from './art-grid/art-grid.component';
import { ArtNavComponent } from './art-nav/art-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtGridComponent,
    ArtNavComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
