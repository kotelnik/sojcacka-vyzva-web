import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NewChallenge, ChallengeFull } from '../challenge';
import { DataService } from '../data.service';
import { Enum } from '../enum';

@Component({
  selector: 'app-new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.css']
})
export class NewChallengeComponent implements OnInit {

  challengeDifficulties: Enum[];
  newChallenge: NewChallenge = new NewChallenge();

  constructor( private dataService: DataService, private location: Location ) { }

  ngOnInit() {
    this.getDifficulties();
  }

  getDifficulties(): void {
    this.dataService.getDifficulties()
      .subscribe( difficulties => this.challengeDifficulties = difficulties );
  }

  onSubmit() {
    this.dataService.createChallenge(this.newChallenge)
      .subscribe( challenge => this.location.go('/challenge/' + challenge.id));
  }

}
