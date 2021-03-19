package com.bogurov.springboot.spring_boot.dao;



import com.bogurov.springboot.spring_boot.entity.Department;
import com.bogurov.springboot.spring_boot.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    public List<Employee> findAllByDepartment(Department department);
}
