import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArtService {

  constructor(private _db: AngularFireDatabase) { }

  getArt(): Observable<any> {
    return this._db.list('/art').map((art) => {
      return art;
    });
  }

}
