import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';
import { UserFull } from '../user';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})

export class CurrentUserComponent implements OnInit {

  @Input() currentUser: UserFull;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.dataService.getCurrentUser()
      .subscribe(user => this.currentUser = user);
  }

}

