import { Component, OnInit } from '@angular/core';

import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-grid',
  templateUrl: './art-grid.component.html',
  styleUrls: ['./art-grid.component.scss']
})
export class ArtGridComponent implements OnInit {

  public tiles;

  private _storageRef;
  private _subscription;

  constructor(private _art: ArtService) {}

  ngOnInit() {
    this._subscription = this._art.getArt().subscribe(art => {
      this.tiles = art
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
