package com.bogurov.springboot.spring_boot.dao;


import com.bogurov.springboot.spring_boot.entity.DepartmentDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentDetailRepository extends JpaRepository<DepartmentDetail, Integer> {

}
