package com.bogurov.springboot.spring_boot.service;



import com.bogurov.springboot.spring_boot.entity.Department;
import com.bogurov.springboot.spring_boot.entity.Employee;

import java.util.List;

public interface EmployeeService {

    public List<Employee> getAllEmployees();
    public void saveEmployee(Employee employee);
    public Employee getEmployee(int id);
    public void deleteEmployee(int id);
    public List<Employee> getAllEmployeesByDepartment(Department department);
}
