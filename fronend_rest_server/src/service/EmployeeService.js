import axios from 'axios'

const EMPLOYEE_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService{

   getEmployees(){
       return axios.get(EMPLOYEE_REST_API_URL);
   }

   createEmployee(employee){
       return axios.post(EMPLOYEE_REST_API_URL, employee);
   }

   updateEmployee(employee){
       return axios.put(EMPLOYEE_REST_API_URL, employee);
   }

   getEmployeeById(employeeId){
       return axios.get(EMPLOYEE_REST_API_URL + '/' + employeeId);
   }

   deleteEmployeeById(employeeId){
       return axios.delete(EMPLOYEE_REST_API_URL + '/' + employeeId);
   }

}

export default new EmployeeService();