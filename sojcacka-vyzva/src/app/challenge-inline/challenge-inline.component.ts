import { Component, OnInit, Input } from '@angular/core';

import { Challenge } from '../challenge';

@Component({
  selector: 'app-challenge-inline',
  templateUrl: './challenge-inline.component.html',
  styleUrls: ['./challenge-inline.component.css']
})
export class ChallengeInlineComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor() { }

  ngOnInit() {
  }

}
