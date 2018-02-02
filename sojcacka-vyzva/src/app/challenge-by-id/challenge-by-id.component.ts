import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { ChallengeFull } from '../challenge';

@Component({
  selector: 'app-challenge-by-id',
  templateUrl: './challenge-by-id.component.html',
  styleUrls: ['./challenge-by-id.component.css']
})
export class ChallengeByIdComponent implements OnInit {

  challenge: ChallengeFull;

  constructor(
    private dataService: DataService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getChallenge();
  }

  getChallenge(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getChallenge(id)
      .subscribe(challenge => this.challenge = challenge);
  }

  goBack(): void {
    this.location.back();
  }

}
