import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Challenge } from './challenge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

readonly ROOT_URL = 'http://10.0.0.40/~kotelnik/sojcaci/vyzvy/api.php?path=';
  closeResult: string;

  constructor(private http:HttpClient) {
    this.getCurrentUser();
  }

  currentUser:any;
  users:any[] = [];
  solvedChallenges:any[] = [];
  myChallenges:any[] = [];

  getCurrentUser(){
    let params = new HttpParams().set('id', '1');
    this.http.get(this.ROOT_URL + "/currentUser", { params })
    .subscribe(
      (data:any) => {
        this.currentUser = data;
      }
    )
  }

  getExecuter(challenge:any){
    if( challenge.executer === null)
    {
      return null;
    }
    return challenge.executer.nickName;
  }

  getUsers(){
  this.http.get(this.ROOT_URL + "/user/list")
    .subscribe(
      (data:any[]) => {
        this.users = data;
      }
    )
  }

  getSolvedChallenges(){
    //this.http.get(this.ROOT_URL + "/search&statusId=2")
    this.http.get(this.ROOT_URL + "/search")
    .subscribe(
      (data:any[]) => {
        this.solvedChallenges = data;
        this.myChallenges = data;
        console.log(data);
      }
    )
  }

  acceptChallenge(){
    this.http.post(this.ROOT_URL + "/acceptChallenge", {})
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

  challengeName="";

  createChallenge(){
  let params = {"creatorId": "3", "title" : this.challengeName, "description" : "v žitě", "score" : 500, "durationSec" : 5, "difficultyId" : 2};
    this.http.post(this.ROOT_URL + "/createChallenge", params)
    .subscribe(
      (challenge:any) => {
        this.solvedChallenges.push(challenge);
      }
    )
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getUsers();
    this.getSolvedChallenges();
  }
}
