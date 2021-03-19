package com.bogurov.springboot.spring_boot.controller;


import com.bogurov.springboot.spring_boot.entity.Department;
import com.bogurov.springboot.spring_boot.entity.Employee;
import com.bogurov.springboot.spring_boot.entity.EmployeeList;
import com.bogurov.springboot.spring_boot.entity.View;
import com.bogurov.springboot.spring_boot.exception_handing.NoSuchDepartmentException;
import com.bogurov.springboot.spring_boot.service.DepartmentService;
import com.bogurov.springboot.spring_boot.service.EmployeeService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RESTController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DepartmentService departmentService;

    // Methods for work with employees

    @GetMapping("/employees")
    public List<Employee> showAllEmployees(){
        List<Employee> allEmployees = employeeService.getAllEmployees();
        return allEmployees;
    }

    // We have to mark methods that Json uses
    @JsonView(View.EmployeeFromDepartment.class)
    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable int id){
        Employee employee = employeeService.getEmployee(id);
        return employee;
    }

    @PostMapping("/employees")
    public Employee addNewEmployee(@RequestBody Employee employee){
        Department department = departmentService.getDepartment(employee.getDepartmentId());
        employee.setDepartment(department);
        employeeService.saveEmployee(employee);
        return employee;
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee){
        Department department = departmentService.getDepartment(employee.getDepartmentId());
        employee.setDepartment(department);
        employeeService.saveEmployee(employee);
        return employee;
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable int id){
        Employee employee = employeeService.getEmployee(id);
        employeeService.deleteEmployee(id);
        return "Employee with ID = " + id + " was deleted";
    }




    // Methods for work with Departments

    @JsonView(View.Summary.class)
    @GetMapping("/departments")
    public List<Department> showAllDepartments(){
        List<Department> departments = departmentService.getAllDepartment();
        departments.sort(new Comparator<Department>() {
            @Override
            public int compare(Department o1, Department o2) {
                return Integer.compare(o1.getId(), o2.getId());
            }
        });
        if (departments == null){
            throw new NoSuchDepartmentException("There are no departments in Database");
        }
        return departments;
    }

    @JsonView(View.Summary.class)
    @GetMapping("/departments/{id}")
    public Department getDepartments(@PathVariable int id){
        Department department = departmentService.getDepartment(id);
        if (department == null){
            throw new NoSuchDepartmentException("There is no department with ID = " + id + " in Database");
        }
        return department;
    }

    @PostMapping("/departments")
    public Department addNewDepartment(@RequestBody Department department){
        departmentService.saveDepartment(department);
        if (department.getId() == 0){
            throw new NoSuchDepartmentException("Department wasn't added in DataBase");
        }
        return department;
    }

    @PutMapping("/departments")
    public Department updateDepartment(@RequestBody Department department){
        departmentService.saveDepartment(department);
        return department;
    }

    @DeleteMapping("/departments/{id}")
    public String deleteDepartment(@PathVariable int id){
        Department department = departmentService.getDepartment(id);
        departmentService.deleteDepartment(id);
        return "Department with ID = " + id + " was deleted";
    }

    @JsonView(View.SummaryWithEmployee.class)
    @GetMapping("/departments/{id}/employees")
    public List<Employee> getEmployees(@PathVariable int id){
        Department department = departmentService.getDepartment(id);
        List<Employee> employees = employeeService.getAllEmployeesByDepartment(department);
        return employees;
    }



}
