import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { ChallengeFull } from '../challenge';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

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
