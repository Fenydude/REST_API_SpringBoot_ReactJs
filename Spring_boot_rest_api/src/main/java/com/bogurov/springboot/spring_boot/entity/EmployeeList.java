package com.bogurov.springboot.spring_boot.entity;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.LinkedList;
import java.util.List;

public class EmployeeList {
    @JsonView(View.SummaryWithEmployee.class)
    private List<Employee> employeeList;

    public EmployeeList(){
        employeeList = new LinkedList<>();
    }

    public EmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    @Override
    public String toString() {
        return "EmployeeList{" +
                "employeeList=" + employeeList +
                '}';
    }
}
