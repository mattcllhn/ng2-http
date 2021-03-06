import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{UserService} from './shared/services/user.service';
import {UsersComponent} from './users/users.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@NgModule({
  imports: [ BrowserModule,
  HttpModule,
  FormsModule
 ],
  declarations: [
    AppComponent,
    UsersComponent
   ],
  bootstrap: [ AppComponent ],
  providers:[
    UserService
  ]
})
export class AppModule {}
