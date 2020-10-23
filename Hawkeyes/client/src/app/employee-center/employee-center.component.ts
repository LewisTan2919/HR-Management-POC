import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import{FileUploadService}from '../file-upload.service'
import{ActivatedRoute} from '@Angular/router'
import{EmployeeService}from '../employee.service'
import { error } from 'console';
import{Department}from '../department'
import{Observable}from'rxjs'
import{Employee}from'../employee'

@Component({
  selector: 'app-employee-center',
  templateUrl: './employee-center.component.html',
  styleUrls: ['./employee-center.component.css']
})
export class EmployeeCenterComponent implements OnInit {

   id:number;

  private sub:any;
  private toFile;
  departments=[];
  selectedDepartmentID:any;
  uploadedPhotoUrl="https://lewisphotoes.s3.us-east-2.amazonaws.com/default.png";
  employee=new Employee();
  





  constructor(private _fileUploadService:FileUploadService,private _route:ActivatedRoute,private _employeeService:EmployeeService) { }




  ngOnInit(): void {
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id']; 
   });

   this.employee.department=new Department()
   this.getDepartments()
  }


  onChange(event)
  {
    this.toFile=event.target.files;
  }



  submit()
  {
    this.uploadFile().then(()=>
    {
      console.log(this.employee)
      this._employeeService.updateEmployee(this.employee).subscribe(res=>
        {
          console.log(res)
        },error=>
        {
          console.error(error)
          alert("update fails!")
        })
    })
  }


  uploadFile()
  {
    const file=this.toFile.item(0)
    return this._fileUploadService.fileUpload(file).then((urlSendBack)=>
    {
      this.employee.photoUrl=urlSendBack.Location
    })
  }



  getDepartments()
  {
    this._employeeService.getAllDepartments().subscribe(data=>
      {
        this.departments=data
      },error=>
      {
        alert('departments loading fail')
      })
  }

  changeDepartment(event:any)
  {
    this.selectedDepartmentID=event.target.value;
    console.log('chosen department id is:'+this.employee.department.id)
  }

}
