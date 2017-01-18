import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
@Injectable()

export class UserService{
  private usersUrl: string = 'https://reqres.in/api/users';
  constructor(private http:Http){}//constructor
  getUsers(): Observable<User[]>{
    return this.http.get(this.usersUrl)
    .map(res => res.json().data)
    .catch(err=>{
      return Observable.throw(err.json().data ||'Internal Server Erroooo')
    });

  }//ngoninit

}
