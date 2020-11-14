import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import{FileUploadService}from '../file-upload.service'
import{ActivatedRoute,Router} from '@Angular/router'

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
  uploadedPhotoUrl:any;
  employee=new Employee();
  





  constructor(private _fileUploadService:FileUploadService,private _route:ActivatedRoute,private _employeeService:EmployeeService,private _router:Router) { }




  ngOnInit(): void {
    
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id']; 
      this.getEmployee(this.id).subscribe(data=>
        {
          this.employee=data
          this.uploadedPhotoUrl=this.employee.photoUrl
        },error=>
        {
          console.log(error)
        })
   });
   if(this.id<=0)
   return;
   this.employee.department=new Department()
   this.getDepartments()
  }


  onChange(event)
  {
    this.toFile=event.target.files;
    if(event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
         this.uploadedPhotoUrl = event.target.result;
      }
  }
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
    }).then(()=>
    {
      this._router.navigate(["/dashboard"])
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

  getEmployee(id:Number)
  {
    return this._employeeService.getEmployee(id)
  }

}
