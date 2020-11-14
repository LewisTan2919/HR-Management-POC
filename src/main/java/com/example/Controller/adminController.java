package com.example.Controller;


import com.example.Entity.Department;
import com.example.Entity.Employee;
import com.example.Service.DepartmentService;
import com.example.Service.EmployeeService;
import com.example.Service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;



@Controller
public class adminController {

    @Autowired
    DepartmentService departmentService;

    @Autowired
    EmployeeService employeeService;

    @Autowired
    JwtUserDetailsService jwtUserDetailsService;


    @CrossOrigin
    @GetMapping("/employees")
    public ResponseEntity<?> getAllEmployees()
    {
        List<Employee> result=employeeService.getAllEmployees();
        return  ResponseEntity.ok(result);
    }

    @CrossOrigin
    @PostMapping("/employee")
    public ResponseEntity<?> addEmployee(@RequestBody  Employee employee)
    {
        Employee e=employeeService.addEmployee(employee);
        return ResponseEntity.ok(e);
    }


    @CrossOrigin
    @PostMapping("/department")
    public ResponseEntity<?> addDepartment(@RequestBody Department department)
    {
        Department d=departmentService.addDepartment(department);
        return ResponseEntity.ok(d);
    }


    @CrossOrigin
    @GetMapping("/departments")
    public ResponseEntity<?> addDepartment()
    {
        List<Department> departments=departmentService.getAllDepartments();
        return ResponseEntity.ok(departments);
    }

    @CrossOrigin
    @GetMapping("/employee/{id}")
    public ResponseEntity<?>getEmployee(@PathVariable("id") int id)
    {
        Employee employee= employeeService.getEmployee(id);
        return ResponseEntity.ok(employee);
    }

    @CrossOrigin
    @GetMapping("/usernames")
    public ResponseEntity<?> getUsernames()
    {
        return ResponseEntity.ok(jwtUserDetailsService.getUsernames());
    }
}
