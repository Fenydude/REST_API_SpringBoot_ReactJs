package com.bogurov.springboot.spring_boot.dao;


import com.bogurov.springboot.spring_boot.entity.EmployeeDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeDetailRepository extends JpaRepository<EmployeeDetail, Integer> {

}
