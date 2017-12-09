import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-currentUser',
  templateUrl: './currentUser.component.html'
})
export class CurrentUserComponent {

  @Input() currentUser : any;

  getRemaining(){
    return 0;
  //    return (new Date(currentUser.currentChanllenge.dueTime) - new Date.now());

  }

}
