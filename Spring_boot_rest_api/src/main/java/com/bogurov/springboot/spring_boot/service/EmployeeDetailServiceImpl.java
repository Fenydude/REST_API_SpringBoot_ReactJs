
package com.bogurov.springboot.spring_boot.service;


import com.bogurov.springboot.spring_boot.dao.EmployeeDetailRepository;
import com.bogurov.springboot.spring_boot.entity.EmployeeDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EmployeeDetailServiceImpl implements EmployeeDetailService{

    @Autowired
    private EmployeeDetailRepository employeeDetailRepository;

    @Override
    public void saveEmployeeDetail(EmployeeDetail employeeDetail) {
        employeeDetailRepository.save(employeeDetail);
    }

    @Override
    public EmployeeDetail getEmployeeDetail(int id) {
        EmployeeDetail employeeDetail = null;
        Optional<EmployeeDetail> optionalEmployeeDetail = employeeDetailRepository.findById(id);
        if (optionalEmployeeDetail.isPresent()){
            employeeDetail = optionalEmployeeDetail.get();
        }
        return employeeDetail;
    }

    @Override
    public void deleteEmployeeDetail(int id) {
        employeeDetailRepository.deleteById(id);
    }
}

