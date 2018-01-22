import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { UsersComponent } from './users/users.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ DataService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
