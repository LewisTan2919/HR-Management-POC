import { Component, OnInit, Input } from '@angular/core';
import {User} from '../User'
import {LoginService} from '../login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public user:User=new User();

   username:string;
   password:string;

  constructor(private _loginService:LoginService,private _router:Router) 
  {

  }


  loginAction(user:User)
  {
    this._loginService.LogIn(user)
    .subscribe(res=>
      {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['dashboard'])
      },err=>console.log(err))
  }
  

  ngOnInit(): void {
  }

}
