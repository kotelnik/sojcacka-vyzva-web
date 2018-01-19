import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { UsersComponent } from './users/users.component';

import { AppRoutingModule } from './/app-routing.module';
import { ChallengesComponent } from './challenges/challenges.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentUserComponent,
    UsersComponent,
    ChallengesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
