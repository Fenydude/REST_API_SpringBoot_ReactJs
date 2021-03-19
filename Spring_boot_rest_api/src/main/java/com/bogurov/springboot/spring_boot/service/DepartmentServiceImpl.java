package com.bogurov.springboot.spring_boot.service;


import com.bogurov.springboot.spring_boot.dao.DepartmentRepository;
import com.bogurov.springboot.spring_boot.entity.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentService{


    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    @Transactional
    public List<Department> getAllDepartment() {
        return departmentRepository.findAll();
    }

    @Override
    public void saveDepartment(Department department) {
        departmentRepository.save(department);
    }

    @Override
    public Department getDepartment(int id) {
        Department department = null;
        Optional<Department> optionalDepartment = departmentRepository.findById(id);
        if (optionalDepartment.isPresent()){
            department = optionalDepartment.get();
        }
        return department;
    }

    @Override
    public void deleteDepartment(int id) {
        departmentRepository.deleteById(id);
    }

   /* @Override
    public Department getEmployeesFromDepartment(int id) {
        return departmentRepository.getEmployeesFromDepartment(id);
    }*/
}
