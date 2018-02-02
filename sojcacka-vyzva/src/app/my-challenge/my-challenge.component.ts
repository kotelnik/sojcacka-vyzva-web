import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ChallengeFull } from '../challenge';

@Component({
  selector: 'app-my-challenge',
  templateUrl: './my-challenge.component.html',
  styleUrls: ['./my-challenge.component.css']
})
export class MyChallengeComponent implements OnInit {

  challenge: ChallengeFull;
  difficulty: number;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getMyChallenge();
  }

  getMyChallenge(): void {
    const id = 3;
    this.dataService.getChallenge(id)
      .subscribe(challenge => this.challenge = challenge);
  }
}
