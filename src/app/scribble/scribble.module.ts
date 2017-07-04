import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdGridListModule,
  MdIconModule,
  MdMenuModule,
  MdToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../../environments/environment';

import { ArtGridComponent } from './art-grid/art-grid.component';
import { ArtNavComponent } from './art-nav/art-nav.component';

import { UserService } from './user.service';

const scribbleRoutes: Routes = [
  {
    path: '',
    component: ArtNavComponent
  }
];

@NgModule({
  declarations: [
    ArtGridComponent,
    ArtNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    RouterModule.forChild(scribbleRoutes)
  ],
  providers: [
    UserService
  ]
})
export class ScribbleModule { }
