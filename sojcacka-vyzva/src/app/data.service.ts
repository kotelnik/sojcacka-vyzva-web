import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { User, UserFull } from './user';
import { Challenge, ChallengeFull } from './challenge';

import { USERS, CHALLENGES, CHALLENGES_FULL, CURRENT_USER, USERS_FULL } from './mock-data';

@Injectable()
export class DataService {

  private challengesUrl = 'api/challenges';

  constructor(private messageService: MessageService, private http: HttpClient ) { }

  getChallenges(): Observable<Challenge[]> {
    // return of(CHALLENGES);
    return this.http.get<Challenge[]>(this.challengesUrl)
                    .pipe(
                      tap(challenges => this.log('Challenges fetched.')),
                      catchError(this.handleError('getHeroes', []))
                    );
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

  getUserChallenges(id: number): Observable<Challenge[]> {
    const subFull: ChallengeFull[] = CHALLENGES_FULL.filter(challenge => (challenge.executer) && (challenge.executer.id === id));
    const indices: number[] = [];
    subFull.forEach(function (challenge) {
       indices.push(challenge.id);
      }
    );
    return of(CHALLENGES.filter(challenge => indices.includes(challenge.id)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('ble ble ble: ' + message);
  }

}
