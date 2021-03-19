import axios from 'axios'

const DEPARTMENT_REST_API_URL = 'http://localhost:8080/api/departments';

class DepartmentService{
    getDepartments(){
           return axios.get(DEPARTMENT_REST_API_URL);
    }

    createDepartment(department){
        return axios.post(DEPARTMENT_REST_API_URL, department);
    }

    updateDepartment(department){
        return axios.put(DEPARTMENT_REST_API_URL, department);
    }

    getDepartmentById(departmentId){
        return axios.get(DEPARTMENT_REST_API_URL+ '/' + departmentId);
    }

    deleteDepartmentById(departmentId){
        return axios.delete(DEPARTMENT_REST_API_URL+ '/' + departmentId);
    }

    getEmployeesByDepartmentId(departmentId){
        console.log(DEPARTMENT_REST_API_URL+ '/' + departmentId + '/employees')
        return axios.get(DEPARTMENT_REST_API_URL+ '/' + departmentId + '/employees');
    }

}

export default new DepartmentService();