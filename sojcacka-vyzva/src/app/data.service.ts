import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { User, UserFull } from './user';
import { Challenge, ChallengeFull, NewChallenge } from './challenge';
import { Enum } from './enum';
import { MessageType } from './message';
import { ChallengeStatus } from './challenge-status';

import { CHALLENGES, CHALLENGES_FULL, STATES_WITH_FLAGS } from './mock-data';

const productionMode = true;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataService {

  //private serverUrl = 'http://192.168.1.15/~kotelnik/sojcacia/vyzvy/api.php?path=/';
  private serverUrl = 'https://sojcaci.cz/vyzvy/api.php?path=/';

  private challengesUrl = productionMode ? 'challenge' : 'api/challenges';
  private challengesFullUrl = productionMode ? 'challenge' : 'api/challenges_full';
  private usersUrl = productionMode ? 'user' : 'api/users';
  private usersFullUrl = productionMode ? 'user' : 'api/users_full';
  private currentUserUrl = productionMode ? 'currentUser' : 'api/users_full/4';
  private currentChallengeUrl = productionMode ? 'currentChallenge' : 'api/challenges_full/2';
  private difficultiesUrl = productionMode ? 'difficulties' : 'api/difficulties';
  private acceptChallengeUrl = productionMode ? 'acceptChallenge' : 'api/challenges_full/5';
  private finishChallengeUrl = productionMode ? 'finishChallenge' : 'api/finishChallenge';
  private userChallengesUrl = productionMode ? 'userChallenges' : 'api/challenges';
  private createChallengeUrl = productionMode ? 'createChallenge' : 'api/challenges';
  private searchUrl = productionMode ? 'search' : 'api/???';

  private getParameterSeparator = productionMode ? '&id=' : '/';

  getUrl(url: string): string {
    return this.serverUrl + url;
  }

  currentUser: UserFull;

  constructor(private messageService: MessageService, private http: HttpClient ) { }

  getChallenges(): Observable<Challenge[]> {
    // return of(CHALLENGES);
    return this.http.get<Challenge[]>(this.getUrl(this.challengesUrl))
                    .pipe(
                      tap(challenges => this.log('Challenges fetched.', this.messageService.messageTypes['silent'])),
                      catchError(this.handleError('getChallenges', []))
                    );
  }

  getUsers(): Observable<User[]> {
    // return of(USERS);
    return this.http.get<User[]>(this.getUrl(this.usersUrl))
                    .pipe(
                      tap(users => this.log('Users fetched.', this.messageService.messageTypes['silent'])),
                      catchError(this.handleError('getUsers', []))
                    );
  }

  getCurrentUser(): Observable<UserFull> {
    // return of(CURRENT_USER);
    return this.http.get<UserFull>(this.getUrl(this.currentUserUrl))
                    .pipe(
                      tap(user => {
                        this.log('Current user fetched.', this.messageService.messageTypes['silent']);
                        this.currentUser = user;
                        }
                      ),
                      catchError(this.handleError<UserFull>('getCurrentUser'))
                    );
  }

  getCurrentChallenge(): Observable<ChallengeFull> {
    return this.http.get<ChallengeFull>(this.getUrl(this.currentChallengeUrl))
                    .pipe(
                      tap(challenge => this.log('Current challenge fetched.', this.messageService.messageTypes['silent'])),
                      catchError(this.handleError<ChallengeFull>('Current challenge failed.'))
                    );
  }

  getChallenge(id: number): Observable<ChallengeFull> {
    // return of(CHALLENGES_FULL.find(challenge => challenge.id === id));
    const url = `${this.challengesFullUrl}${this.getParameterSeparator}${id}`;
    return this.http.get<ChallengeFull>(this.getUrl(url))
                    .pipe(
                      tap(challenge => this.log(`Challenge id=${id} fetched.`, this.messageService.messageTypes['silent'])),
                      catchError(this.handleError<ChallengeFull>(`getChallenge id=${id}`))
                    );
  }

  getUser(id: number): Observable<UserFull> {
    // return of(USERS_FULL.find(user => user.id === id));
    const url = `${this.usersFullUrl}${this.getParameterSeparator}${id}`;
    return this.http.get<UserFull>(this.getUrl(url))
                    .pipe(
                      tap(usr => this.log(`User id=${id} fetched.`, this.messageService.messageTypes['silent'])),
                      catchError(this.handleError<UserFull>(`getUser id=${id}`))
                    );
  }

  getUserChallenges(id: number): Observable<Challenge[]> {
    const url = `${this.userChallengesUrl}${this.getParameterSeparator}${id}`;
    return this.http.get<Challenge[]>(this.getUrl(url))
                    .pipe(
                      tap(challenges => this.log('User Challenges fetched.', this.messageService.messageTypes['silent'])),
                      catchError(this.handleError(`getUserChallenges id=${id}`, []))
                    );
  }

  getDifficulties(): Observable<Enum[]> {
    return this.http.get<Enum[]>(this.getUrl(this.difficultiesUrl))
                    .pipe(
                      tap(difficulties => this.log('Difficulties fetched.', this.messageService.messageTypes['silent'])),
                      catchError(this.handleError('getDifficulties', []))
                    );
  }

  acceptChallenge(difficultyId: number): Observable<ChallengeFull> {
    return this.http.post<ChallengeFull>(this.getUrl(this.acceptChallengeUrl), difficultyId, httpOptions)
                    .pipe(
                      tap(challenge => this.log('Challenge accepted.', this.messageService.messageTypes['success'])),
                      catchError(this.handleError<ChallengeFull>('acceptChallenge'))
                    );
  }

  finishChallenge(challengeStatus: ChallengeStatus): Observable<any> {
    return this.http.post(this.getUrl(this.finishChallengeUrl), challengeStatus, httpOptions)
                    .pipe(
                      tap(_ => {
                        this.log('Výzva byla ukončena.', this.messageService.messageTypes['success']);
                      }),
                      catchError(this.handleError<any>('finishChallenge'))
                    );
  }

  createChallenge(challenge: NewChallenge): Observable<ChallengeFull> {
    return this.http.post<ChallengeFull>(this.getUrl(this.createChallengeUrl), challenge, httpOptions)
                    .pipe(
                      tap( createdChallenge => {
                        this.log('Výzva byla vytvořena.', this.messageService.messageTypes['success']);
                      }),
                      catchError(this.handleError<ChallengeFull>('createChallenge'))
                    );
  }

  search(term: string): Observable<any[]> {
    //return of(STATES_WITH_FLAGS.filter(state => state.name.toUpperCase().indexOf(term.toUpperCase()) >= 0));
    const url = `${this.searchUrl}&term=${term}`;
    return this.http.get<any>(this.getUrl(url))
                    .pipe(
                      tap( searchResult => {
                        this.log('Search was succesfull.', this.messageService.messageTypes['silent']);
                      }),
                      catchError(this.handleError('search', []))
                     );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`, this.messageService.messageTypes['error']);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(messageText: string, messageType: MessageType) {
    this.messageService.add(messageText, messageType);
  }

}
