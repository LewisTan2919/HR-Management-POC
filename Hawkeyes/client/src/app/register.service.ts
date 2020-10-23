import { Injectable, } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }
  private _registerUrl="http://localhost:4040/register"

  checkPasswordValid(pwd1:String,pwd2:String)
  {
    if(pwd1==''||pwd2==''||pwd1!=pwd2)
    {
     alert('password wrong!')
      return false;
    }

  
    return true;
  }


  registerUser(user:User)
  {
   return this._http.post<any>(this._registerUrl,user).pipe();
  }



}
