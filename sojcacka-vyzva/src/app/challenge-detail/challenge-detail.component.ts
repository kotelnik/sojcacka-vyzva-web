import { Component, OnInit, Input } from '@angular/core';

import { ChallengeFull } from '../challenge';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

  @Input() challenge: ChallengeFull;

  constructor() { }

  ngOnInit() {
  }

}
