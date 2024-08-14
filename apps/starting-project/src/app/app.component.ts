import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {NgForOf} from "@angular/common";
import { SharedUiComponent } from '@angular-studies/shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    UserDetailsComponent,
    NgForOf,
    SharedUiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: {id: string, name: string, avatar: string};

  getSelectedUser(id: string){
    return this.users.find((e) => e.id === id);
  }
  onSelectUser(id:string) {
    this.selectedUser = this.getSelectedUser(id);
  }
}
