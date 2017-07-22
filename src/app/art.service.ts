import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { environment } from '../environments/environment';

@Injectable()
export class ArtService {

  private _storageRef;

  constructor(private _db: AngularFireDatabase, firebaseApp: FirebaseApp) {
    const bucket = `gs://${environment.firebase.storageBucket}/art`;
    this._storageRef = firebase.storage(firebaseApp).refFromURL(bucket);
  }

  getArt(): Observable<any> {
    return this._db.list('/art').map((art) => {
      return art.map(a => {
        a.storagePromise = this._storageRef.child(`${a.fileName}`).getDownloadURL();
        return a;
      })
    });
  }

}
