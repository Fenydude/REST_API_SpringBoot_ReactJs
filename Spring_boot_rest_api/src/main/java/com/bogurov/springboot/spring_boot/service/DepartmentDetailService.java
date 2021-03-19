package com.bogurov.springboot.spring_boot.service;


import com.bogurov.springboot.spring_boot.entity.DepartmentDetail;

public interface DepartmentDetailService {
    public void saveDepartmentDetail(DepartmentDetail departmentDetail);
    public DepartmentDetail getDepartmentDetail(int id);
    public void deleteDepartmentDetail(int id);
}
