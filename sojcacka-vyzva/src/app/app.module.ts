import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { UsersComponent } from './users/users.component';

import { AppRoutingModule } from './/app-routing.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { MessageService } from './message.service';
import { ChallengeService } from './challenge.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentUserComponent,
    UsersComponent,
    ChallengesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ChallengeService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
