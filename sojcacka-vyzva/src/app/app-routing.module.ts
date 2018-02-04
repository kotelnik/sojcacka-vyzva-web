import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeByIdComponent } from './challenge-by-id/challenge-by-id.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MyChallengeSwitchComponent } from './my-challenge-switch/my-challenge-switch.component';
import { NewChallengeComponent } from './new-challenge/new-challenge.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'challenge/:id', component: ChallengeByIdComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'newChallenge', component: NewChallengeComponent },
  { path: 'myChallenge', component: MyChallengeSwitchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
