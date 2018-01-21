import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  challenges: Challenge[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getChallenges();
  }

  getChallenges(): void {
    this.dataService.getChallenges()
      .subscribe(challenges => this.challenges = challenges);
  }

}
