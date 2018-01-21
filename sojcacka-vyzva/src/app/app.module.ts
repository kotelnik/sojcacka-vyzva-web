import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

@NgModule({
  declarations: [
    AppComponent,
    CurrentUserComponent,
    UsersComponent,
    ChallengesComponent,
    MessagesComponent,
    UserDetailComponent,
    ChallengeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DataService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
