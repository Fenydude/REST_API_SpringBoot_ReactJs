package com.bogurov.springboot.spring_boot.entity;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

@Entity
@Table(name = "departments_details")
public class DepartmentDetail {
    @JsonView({View.Summary.class, View.SummaryWithEmployee.class})
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JsonView({View.Summary.class, View.SummaryWithEmployee.class})
    @Column(name = "phone_number")
    private String phoneNumber;
    @JsonView({View.Summary.class, View.SummaryWithEmployee.class})
    @Column(name = "address")
    private String address;

    public DepartmentDetail() {
    }

    public DepartmentDetail(String phoneNumber, String address) {
        this.phoneNumber = phoneNumber;
        this.address = address;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
