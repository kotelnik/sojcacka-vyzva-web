import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-currentUser',
  templateUrl: './currentUser.component.html'
})
export class CurrentUserComponent {

  @Input() currentUser : any;

}
