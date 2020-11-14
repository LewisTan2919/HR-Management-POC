package com.example.Service;

import com.example.Entity.Employee;
import com.example.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository repository;


    public List<Employee> getAllEmployees()
    {
        return repository.findAll();
    }

    public Employee addEmployee(Employee employee)
    {
       return  repository.save(employee);
    }

    public Employee getEmployee(int id)
    {
        return repository.findById(id).orElse(null);
    }

}
