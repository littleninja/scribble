// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {
  MdButtonModule,
  MdGridListModule,
  MdIconModule,
  MdMenuModule,
  MdToolbarModule
} from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

// App
import { AppComponent } from './app.component';
import { ArtGridComponent } from './art-grid/art-grid.component';
import { ArtNavComponent } from './art-nav/art-nav.component';
import { ArtService } from './art.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    ArtGridComponent,
    ArtNavComponent
  ],
  providers: [
    ArtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
