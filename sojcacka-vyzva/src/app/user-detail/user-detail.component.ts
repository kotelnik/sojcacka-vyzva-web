import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { UserFull } from '../user';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: UserFull;
  challenges: Challenge[] = [];

  constructor(
    private dataService: DataService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
    this.getUserPastChallenges();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getUser(id)
      .subscribe(user => this.user = user);
  }

  getUserPastChallenges(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getUserChallenges(id)
      .subscribe(challenges => this.challenges = challenges);
  }

  goBack(): void {
    this.location.back();
  }

}
