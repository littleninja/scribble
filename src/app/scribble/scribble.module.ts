import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdGridListModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../../environments/environment';
import { ArtGridComponent } from './art-grid/art-grid.component';
import { ArtNavComponent } from './art-nav/art-nav.component';

@NgModule({
  declarations: [
    ArtGridComponent,
    ArtNavComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: []
})
export class ScribbleModule { }
