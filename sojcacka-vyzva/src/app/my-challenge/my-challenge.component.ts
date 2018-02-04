import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../data.service';
import { ChallengeFull } from '../challenge';
import { ChallengeStatus } from '../challenge-status';

@Component({
  selector: 'app-my-challenge',
  templateUrl: './my-challenge.component.html',
  styleUrls: ['./my-challenge.component.css']
})
export class MyChallengeComponent implements OnInit {

  challenge: ChallengeFull;
  finished: boolean;

  constructor(private dataService: DataService ) { }

  onSubmit() {
    const challengeStatus: ChallengeStatus = { id: this.challenge.id, finished: this.finished };
    this.dataService.finishChallenge(challengeStatus)
      .subscribe();
  }

  ngOnInit() {
    this.getMyChallenge();
  }

  getMyChallenge(): void {
    this.dataService.getCurrentChallenge()
      .subscribe(challenge => this.challenge = challenge);
  }

}
