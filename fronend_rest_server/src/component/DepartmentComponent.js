import React from 'react';
import DepartmentService from '../service/DepartmentService';

class DepartmentComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            departments:[]
        }

        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
        this.showEmployees = this.showEmployees.bind(this);
    }

    showEmployees(id){
        this.props.history.push(`/department/${id}/employees`)
    }

    deleteDepartment(id){
        DepartmentService.deleteDepartmentById(id).then((res) =>{
            this.setState({departments: this.state.departments.filter(department => department.id !==id)});
        });
    }

    editDepartment(id){
        this.props.history.push(`/add-department/${id}`)
    }

    componentDidMount(){
        DepartmentService.getDepartments().then((response) =>{
            this.setState({departments: response.data})
        });
        console.log(this.state.departments);
    }

    addDepartment(){
        this.props.history.push('/add-department/_add');
    }

    render(){
        return(
            <div>
                <h1 className = "text-center" >Department List</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addDepartment}>Add Department</button>
                </div>
                <table className = "table table-striper table-bordered">
                    <thead>
                        <tr>
                            <th>Department ID</th>
                            <th>Department Name</th>
                            <th>Department Department</th>
                            <th>Department PhoneNumber</th>
                            <th>Department Address</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departments.map(
                                department =>
                                <tr key = {department.id}>
                                    <td>{department.id}</td>
                                    <td>{department.name}</td>
                                    <td>{department.department}</td>
                                    <td>{department.departmentDetail.phoneNumber}</td>
                                    <td>{department.departmentDetail.address}</td>
                                    <td>
                                        <button onClick={()=> this.editDepartment(department.id)} className="btn btn-info" >Update</button>
                                        <button style={{marginLeft:'10px'}} onClick={()=> this.deleteDepartment(department.id)} className="btn btn-danger" >Delete</button>
                                        <button style={{marginLeft:'10px'}} onClick={()=> this.showEmployees(department.id)} className="btn btn-info" >Employees</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DepartmentComponent;