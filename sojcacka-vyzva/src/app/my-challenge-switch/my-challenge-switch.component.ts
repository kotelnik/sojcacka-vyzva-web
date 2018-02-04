import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-my-challenge-switch',
  templateUrl: './my-challenge-switch.component.html',
  styleUrls: ['./my-challenge-switch.component.css']
})
export class MyChallengeSwitchComponent implements OnInit {

  constructor( public dataService: DataService ) { }

  ngOnInit() {
  }

}
