import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import{AuthService}from'./auth.service'

@Injectable()
export class JwtInterceptorServiceInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authService=this.injector.get(AuthService);
    if(req.headers.has('Authorization'))
    {
      return next.handle(req)
    }
    else
    {

  
    const tokenizedReq=req.clone(
      {
        setHeaders:
        {
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )

    return next.handle(tokenizedReq);
  } 
 }
}
