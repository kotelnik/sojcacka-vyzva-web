import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  currentUser: User = {
    id: 1,
    firstName: 'First',
    lastName: 'Last',
    nickName: 'Nick',
    scoreChallenges: 500
  };

  constructor() { }

  ngOnInit() {
  }

}
