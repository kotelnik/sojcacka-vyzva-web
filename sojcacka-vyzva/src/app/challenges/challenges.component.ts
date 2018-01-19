import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  text = 'výzev';
  constructor(private challengeService: ChallengeService) { }

  messageMe(): void{
    this.challengeService.sendMessage();
  }

  ngOnInit() {
  }

}
