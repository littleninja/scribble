import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-art-nav',
  templateUrl: './art-nav.component.html',
  styleUrls: ['./art-nav.component.scss']
})
export class ArtNavComponent implements OnInit {

  authLabel = 'Sign in';

  constructor(public user: UserService) { }

  ngOnInit() { }

}
