import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  public photoURL: string;

  public uid: string;

  public get isAuthenticated(): boolean {
    return !!this._auth.auth.currentUser;
  }

  constructor(private _auth: AngularFireAuth) {
    _auth.authState.subscribe((currentUser) => this._updateUser(currentUser));
  }

  public login() {
    this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logout() {
    this._auth.auth.signOut();
  }

  private _updateUser(currentUser) {
    if (currentUser) {
      this.photoURL = currentUser.photoURL;
      this.uid = currentUser.uid;
    }
    else {
      this.photoURL = null;
      this.uid = null;
    }
  }

}
