import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthService,private _router:Router){}
  canActivate()
  {
    if(this._authService.loggedin()){
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }
  }
  

