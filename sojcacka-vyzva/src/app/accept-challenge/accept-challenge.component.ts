import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Enum } from '../enum';

@Component({
  selector: 'app-accept-challenge',
  templateUrl: './accept-challenge.component.html',
  styleUrls: ['./accept-challenge.component.css']
})
export class AcceptChallengeComponent implements OnInit {

  challengeDifficulties: Enum[];
  difficulty: number;

  constructor(private dataService: DataService) { }

  onSubmit() {
    this.dataService.acceptChallenge(this.difficulty)
      .subscribe(challenge => this.dataService.currentUser.hasChallenge = true);
  }

  ngOnInit() {
    this.getDifficulties();
  }

  getDifficulties(): void {
    this.dataService.getDifficulties()
      .subscribe(difficulties => this.challengeDifficulties = difficulties);
  }
}
