import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  readonly ROOT_URL = 'https://sojcaci.cz/vyzvy/api.php?path=';
  closeResult: string;

  constructor(private http:HttpClient, private modalService: NgbModal) {
    this.getCurrentUser();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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

  getUsers(){
  this.http.get(this.ROOT_URL + "/user/list")
    .subscribe(
      (data:any[]) => {
        this.users = data;
      }
    )
  }

  getSolvedChallenges(){
    this.http.get(this.ROOT_URL + "/search&statusId=2")
    .subscribe(
      (data:any[]) => {
        this.solvedChallenges = data;
        this.myChallenges = data;
        console.log(data);
      }
    )
  }

  addChallenge(){
    console.log("Added");
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getUsers();
    this.getSolvedChallenges();
  }
}
