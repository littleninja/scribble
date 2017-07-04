import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-art-grid',
  templateUrl: './art-grid.component.html',
  styleUrls: ['./art-grid.component.scss']
})
export class ArtGridComponent implements OnInit {

  public tiles;

  constructor(private _db: AngularFireDatabase) {
  }

  ngOnInit() {
    const subscription = this._db.list('/tiles');
    subscription.subscribe((t) => {
      this.tiles = t.map(v => v.$key);
    });
  }

}
