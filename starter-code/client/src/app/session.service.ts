import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http,Response } from '@angular/http';
import {UserObject} from './interfaces/user-interface';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

// {BASEURL} = environment.BASEURL;

@Injectable()
export class SessionService {

  user:UserObject;
  options: object = {whitCredentials: true};
  constructor(private http:Http) { }

  signup(u:UserObject){
    // return this.http.post(`${BASEURL}/api/signup`,u)
    console.log(u);
    return this.http.post(`http://localhost:3000/api/signup`,u, this.options)
     .subscribe((user:any) => {
       console.log('joder');
     })

  }
}
