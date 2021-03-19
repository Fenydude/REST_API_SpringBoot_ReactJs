package com.bogurov.springboot.spring_boot.exception_handing;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/*
* Send an exception in json format
* Use ResponseEntity for sending exception(we can use any class) like response on a server
*/

@ControllerAdvice
public class EmployeeGlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<EmployeeIncorrectDate> handleException(
            NoSuchDepartmentException exception){
        EmployeeIncorrectDate date =  new EmployeeIncorrectDate();
        date.setInfo(exception.getMessage());
        return new ResponseEntity<>(date, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<EmployeeIncorrectDate> handleException(
            Exception exception){
        EmployeeIncorrectDate date =  new EmployeeIncorrectDate();
        date.setInfo(exception.getMessage());
        return new ResponseEntity<>(date, HttpStatus.BAD_REQUEST);
    }
}
