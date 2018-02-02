import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { User, UserFull } from './user';
import { Challenge, ChallengeFull } from './challenge';
import { Enum } from './enum';

import { CHALLENGES, CHALLENGES_FULL } from './mock-data';

@Injectable()
export class DataService {

  private challengesUrl = 'api/challenges';
  private challengesFullUrl = 'api/challenges_full';
  private usersUrl = 'api/users';
  private usersFullUrl = 'api/users_full';
  private currentUserUrl = 'api/users_full/4';
  private currentChallengeUrl = 'api/challenges_full/3';
  private difficultiesUrl = 'api/difficulties';
  private acceptChallengeUrl = 'api/challenges_full/5';

  currentUser: UserFull;

  constructor(private messageService: MessageService, private http: HttpClient ) { }

  getChallenges(): Observable<Challenge[]> {
    // return of(CHALLENGES);
    return this.http.get<Challenge[]>(this.challengesUrl)
                    .pipe(
                      tap(challenges => this.log('Challenges fetched.', 'success')),
                      catchError(this.handleError('getHeroes', []))
                    );
  }

  getUsers(): Observable<User[]> {
    // return of(USERS);
    return this.http.get<User[]>(this.usersUrl)
                    .pipe(
                      tap(users => this.log('Users fetched.', 'success')),
                      catchError(this.handleError('getUsers', []))
                    );
  }

  getCurrentUser(): Observable<UserFull> {
    // return of(CURRENT_USER);
    return this.http.get<UserFull>(this.currentUserUrl)
                    .pipe(
                      tap(user => {
                        this.log('Current user fetched.', 'success');
                        this.currentUser = user;
                        }
                      ),
                      catchError(this.handleError<UserFull>('getCurrentUser'))
                    );
  }

  getCurrentChallenge(): Observable<ChallengeFull> {
    return this.http.get<ChallengeFull>(this.currentChallengeUrl)
                    .pipe(
                      tap(challenge => this.log('Current challenge fetched.', 'success')),
                      catchError(this.handleError<ChallengeFull>('Current challenge failed.'))
                    );
  }

  getChallenge(id: number): Observable<ChallengeFull> {
    // return of(CHALLENGES_FULL.find(challenge => challenge.id === id));
    const url = `${this.challengesFullUrl}/${id}`;
    return this.http.get<ChallengeFull>(url)
                    .pipe(
                      tap(challenge => this.log(`Challenge id=${id} fetched.`, 'success')),
                      catchError(this.handleError<ChallengeFull>(`getChallenge id=${id}`))
                    );
  }

  getUser(id: number): Observable<UserFull> {
    // return of(USERS_FULL.find(user => user.id === id));
    const url = `${this.usersFullUrl}/${id}`;
    return this.http.get<UserFull>(url)
                    .pipe(
                      tap(usr => this.log(`User id=${id} fetched.`, 'success')),
                      catchError(this.handleError<UserFull>(`getUser id=${id}`))
                    );
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

  getDifficulties(): Observable<Enum[]> {
    return this.http.get<Enum[]>(this.difficultiesUrl)
                    .pipe(
                      tap(difficulties => this.log('Difficulties fetched.', 'success')),
                      catchError(this.handleError('getDifficulties', []))
                    );
  }

  acceptChallenge(difficultyId: number): Observable<ChallengeFull> {
    return this.http.get<ChallengeFull>(this.acceptChallengeUrl)
                    .pipe(
                      tap(challenge => this.log('Challenge accepted.', 'success')),
                      catchError(this.handleError<ChallengeFull>('acceptChallenge'))
                    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`, 'danger');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(messageText: string, messageType: string) {
    this.messageService.add(messageText, messageType);
  }

}
