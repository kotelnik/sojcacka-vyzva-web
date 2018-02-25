import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { UsersComponent } from './users/users.component';
//import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { UserInlineComponent } from './user-inline/user-inline.component';
import { ChallengeInlineComponent } from './challenge-inline/challenge-inline.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { MyChallengeComponent } from './my-challenge/my-challenge.component';
import { ChallengeByIdComponent } from './challenge-by-id/challenge-by-id.component';
import { AcceptChallengeComponent } from './accept-challenge/accept-challenge.component';
import { NewChallengeComponent } from './new-challenge/new-challenge.component';
import { MyChallengeSwitchComponent } from './my-challenge-switch/my-challenge-switch.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentUserComponent,
    UsersComponent,
    ChallengesComponent,
    MessagesComponent,
    UserDetailComponent,
    ChallengeDetailComponent,
    UserInlineComponent,
    ChallengeInlineComponent,
    AppNavbarComponent,
    ChallengeListComponent,
    MyChallengeComponent,
    ChallengeByIdComponent,
    AcceptChallengeComponent,
    NewChallengeComponent,
    MyChallengeSwitchComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
