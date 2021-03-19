package com.bogurov.springboot.spring_boot.service;


import com.bogurov.springboot.spring_boot.dao.DepartmentDetailRepository;
import com.bogurov.springboot.spring_boot.entity.DepartmentDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class DepartmentDetailServiceImpl implements DepartmentDetailService{
    @Autowired
    private DepartmentDetailRepository departmentDetailRepository;
    @Override
    public void saveDepartmentDetail(DepartmentDetail departmentDetail) {
        departmentDetailRepository.save(departmentDetail);
    }

    @Override
    public DepartmentDetail getDepartmentDetail(int id) {
        DepartmentDetail departmentDetail = null;
        Optional<DepartmentDetail> optionalDepartmentDetail = departmentDetailRepository.findById(id);
        if (optionalDepartmentDetail.isPresent()){
            departmentDetail = optionalDepartmentDetail.get();
        }
        return departmentDetail;
    }

    @Override
    public void deleteDepartmentDetail(int id) {
        departmentDetailRepository.deleteById(id);
    }
}
