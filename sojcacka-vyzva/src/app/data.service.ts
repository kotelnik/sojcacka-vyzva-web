import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { User, UserFull } from './user';
import { Challenge, ChallengeFull } from './challenge';

import { USERS, CHALLENGES, CHALLENGES_FULL, CURRENT_USER, USERS_FULL } from './mock-data';

@Injectable()
export class DataService {

  constructor(private messageService: MessageService) { }

  getChallenges(): Observable<Challenge[]> {
    return of(CHALLENGES);
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getCurrentUser(): Observable<UserFull> {
    return of(CURRENT_USER);
  }

  getChallenge(id: number): Observable<ChallengeFull> {
    return of(CHALLENGES_FULL.find(challenge => challenge.id === id));
  }

  getUser(id: number): Observable<UserFull> {
    return of(USERS_FULL.find(user => user.id === id));
  }

  sendMessage() {
    this.messageService.add('ble ble ble');
  }

}
