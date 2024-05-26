import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-usersTasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users = DUMMY_USERS
  title = 'userList';
  public selectedUserId!: string

  onSelect(id: string) {
    this.selectedUserId = id
    // console.log(this.selectedUserId)
  }
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }



}
