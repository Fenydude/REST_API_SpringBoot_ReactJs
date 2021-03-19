import React, { Component } from 'react';
import DepartmentService from '../service/DepartmentService';
import EmployeeService from '../service/EmployeeService';

class EmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            empl: [],
            id: this.props.match.params.id
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);

    }

    editEmployee(id, depId){
        this.props.history.push(`/add-employee/${depId}/${id}`)
    }

    deleteEmployee(employeeId){
        EmployeeService.deleteEmployeeById(employeeId).then((res) =>{
            this.setState({empl: this.state.empl.filter(employee => employee.id !== employeeId)});
        })

    }
    addEmployee(depId){
        this.props.history.push(`/add-employee/${depId}/_add`);
    }


    componentDidMount(){
        DepartmentService.getEmployeesByDepartmentId(this.state.id).then((responce) =>{
            this.setState({empl: responce.data});
        });
        console.log(this.state.empl);
    }


    render() {
        return (
            <div>
            <h1 className = "text-center" >Employee List</h1>
            <div className="row">
                <button className="btn btn-primary" onClick={() => this.addEmployee(this.state.id)}>Add Employee</button>
            </div>
            <table className = "table table-striper table-bordered">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Surname</th>
                        <th>Employee Salary</th>
                        <th>Employee City</th>
                        <th>Employee Phonenumber</th>
                        <th>Employee Email</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.empl.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.surname}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.employeeDetail.city}</td>
                                <td>{employee.employeeDetail.phoneNumber}</td>
                                <td>{employee.employeeDetail.email}</td>
                                <td>
                                    <button onClick={()=> this.editEmployee(employee.id, this.state.id)} className="btn btn-info" >Update</button>
                                    <button style={{marginLeft:'10px'}} onClick={()=> this.deleteEmployee(employee.id)} className="btn btn-danger" >Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        );
    }
}

export default EmployeeComponent;