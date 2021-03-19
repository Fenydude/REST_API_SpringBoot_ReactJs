package com.bogurov.springboot.spring_boot.service;


import com.bogurov.springboot.spring_boot.entity.EmployeeDetail;

public interface EmployeeDetailService {
    public void saveEmployeeDetail(EmployeeDetail employeeDetail);
    public EmployeeDetail getEmployeeDetail(int id);
    public void deleteEmployeeDetail(int id);
}
