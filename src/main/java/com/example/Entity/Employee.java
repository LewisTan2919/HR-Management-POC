package com.example.Entity;


import javax.persistence.*;

@Entity
public class Employee {


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;

    @Column
    private int age;

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    @Column
    private String photoUrl;

    @Column
    private String jobTitle;

    @Column
    private String description;


    @ManyToOne
    @JoinColumn(name="department_id")
    private Department department;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }





}
