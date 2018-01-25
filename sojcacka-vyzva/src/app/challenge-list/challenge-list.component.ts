import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  @Input() challenges: Challenge[];

  constructor() { }

  ngOnInit() {
  }

}
