import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  loggedin()
  {
    return !!localStorage.getItem('token')
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    localStorage.removeItem('curUser')
    this.router.navigate(['./login'])
  }
}
