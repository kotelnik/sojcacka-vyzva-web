import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../data.service';
import { ChallengeFull } from '../challenge';
import { UserFull } from '../user';
import { Enum } from '../enum';

@Component({
  selector: 'app-my-challenge',
  templateUrl: './my-challenge.component.html',
  styleUrls: ['./my-challenge.component.css']
})
export class MyChallengeComponent implements OnInit {

  challenge: ChallengeFull;
  hasChallenge: boolean;
  currentUser: UserFull;
  difficulties: Enum[];

  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.getMyChallenge();  // TODO - request only if current user has challenge (and after it is loaded)
  }

  getMyChallenge(): void {
    this.dataService.getCurrentChallenge()
      .subscribe(challenge => this.challenge = challenge);
  }

}
