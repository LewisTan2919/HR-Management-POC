import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http'
import{AuthService} from './auth.service'
import{Department}from './department'
import {catchError, map, take} from 'rxjs/operators';
import{Employee}from'./employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private getEmployeesUrl='http://localhost:4040/employees'
   private getDepartmentsUrl='http://localhost:4040/departments'

   private uploadEmployeeUrl="http://localhost:4040/employee"

   httpOptions = {
    headers:new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':`Bearer ${this.authService.getToken()}`
    })
  }

  private
  constructor(private _http:HttpClient,private authService:AuthService) { }

  employees=[]

  getAllEmployees()
  {
    return this._http.get<any>(this.getEmployeesUrl,this.httpOptions)
  }

  getAllDepartments()
  {
    return this._http.get<any>(this.getDepartmentsUrl,this.httpOptions).pipe()
  }

  updateEmployee(employee:Employee)
  {
  
    return this._http.post<Employee>(this.uploadEmployeeUrl,employee,this.httpOptions)
  }
}
