import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-myTasks',
  templateUrl: './myTasks.component.html'
})
export class MyTasksComponent {

  @Input() currentUser:any;
  @Input() myChallenges:any[];

}
