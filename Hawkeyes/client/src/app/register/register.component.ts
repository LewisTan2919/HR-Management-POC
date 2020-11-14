import { Component, OnInit } from '@angular/core';
import{RegisterService} from '../register.service'
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _registerService:RegisterService,private _router:Router) { }
  username:string;
  password:string;
  passwordRepeat:string;

 
  ngOnInit(): void {
  }

  register():void{


    console.log(this.username+"   "+this.password)
    let valid=this._registerService.checkPasswordValid(this.password,this.passwordRepeat)
    if(valid)
    {
      let user=new User();
      user.username=this.username;
      user.password=this.password;
      this._registerService.registerUser(user)
      .subscribe( res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['dashboard'])

      },
      err =>
      {
        console.log(err)
        alert(JSON.stringify(err._body))
        
      } )

      
    }
    else 
    {
      return;
    }

  }


  sendRegisterRequest()
  {

  }



}
