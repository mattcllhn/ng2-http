import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './shared/models/user';
import {UserService} from "./shared/services/user.service";

@Component({
  selector: 'my-app',
  styles: [`

  `],
  template: `
  <my-users></my-users>
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>
    <div *ngIf = "users">
      <div *ngFor = "let user of users" >
        <h2>{{user.first_name}} {{user.last_name}}</h2>

      </div>
    </div>
  `
})
export class AppComponent implements OnInit{
  users: User[];

  message = 'This is the sample message.';
  constructor(private service : UserService){

  }//constructor
  ngOnInit(){
    //get users
    this.service.getUsers()
    .subscribe(
      usersBack => this.users = usersBack,
      err=> {console.log(err)}
    );
  }//ngoninit
}
