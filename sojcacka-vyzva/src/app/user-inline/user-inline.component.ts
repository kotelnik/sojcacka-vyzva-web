import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-inline',
  templateUrl: './user-inline.component.html',
  styleUrls: ['./user-inline.component.css']
})
export class UserInlineComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
