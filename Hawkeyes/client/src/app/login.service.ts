import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http'
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _postUrl="http://localhost:4040/login"
  constructor(private _http:HttpClient) { }

  httpOptions={
    headers:new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }

  LogIn(user:User)
  {
    console.log(user.username+" "+user.password);
    return this._http.post<any>(this._postUrl,user).pipe();
  }


}
