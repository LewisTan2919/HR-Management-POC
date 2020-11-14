package com.example.Service;


import com.example.Entity.Department;
import com.example.Repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    DepartmentRepository repository;

    public List<Department> getAllDepartments()
    {
        return repository.findAll();
    }

    public Department addDepartment(Department department)
    {
        return repository.save(department);
    }
}
