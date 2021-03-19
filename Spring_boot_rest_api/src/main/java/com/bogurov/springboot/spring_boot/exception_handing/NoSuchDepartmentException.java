package com.bogurov.springboot.spring_boot.exception_handing;

public class NoSuchDepartmentException extends RuntimeException{
    public NoSuchDepartmentException(String message) {
        super(message);
    }
}
