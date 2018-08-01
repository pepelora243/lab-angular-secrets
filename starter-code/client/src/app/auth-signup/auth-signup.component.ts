import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import {UserObject} from '../interfaces/user-interface';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  user1:Object={};

  constructor(public sesi:SessionService) { }

  ngOnInit() {
  }
  
  signup(user:UserObject){
    console.log(user);
    this.sesi.signup(user);
  }

}
