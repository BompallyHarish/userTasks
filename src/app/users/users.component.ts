import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-usersTasks';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
// public users = DUMMY_USERS
@Input() user!:string
@Input() userId!:string
@Output() select = new EventEmitter<string>()

onClick(){
  this.select.emit(this.userId)
}
}
