package com.bogurov.springboot.spring_boot.service;


import com.bogurov.springboot.spring_boot.entity.Department;

import java.util.List;

public interface DepartmentService {
    public List<Department> getAllDepartment();
    public void saveDepartment(Department department);
    public Department getDepartment(int id);
    public void deleteDepartment(int id);
   // public Department getEmployeesFromDepartment(int id);
}
