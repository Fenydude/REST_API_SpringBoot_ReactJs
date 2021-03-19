import React, { Component } from 'react';
import DepartmentService from '../service/DepartmentService';


class UpdateDepartmentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            department:'',
            departmentDetail:{
                phoneNumber:'',
                address:''
            }
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeDepartmentPhoneNumberHandler = this.changeDepartmentPhoneNumberHandler.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
    }



    componentDidMount(){
    
        DepartmentService.getDepartmentById(this.state.id).then((res) =>{
            let department = res.data;
            this.setState({name: department.name,
                department: department.department,
                departmentDetail: department.departmentDetail
            });
        });
    }
    
    updateDepartment = (e)=>{
        e.preventDefault();
        let department = {id: this.state.id ,name: this.state.name, department: this.state.department, departmentDetail: this.state.departmentDetail};
        console.log('department => ' + JSON.stringify(department));

        DepartmentService.updateDepartment(department).then((res) =>{
            this.props.history.push('/departments');
        });

    }

    cancel(){
        this.props.history.push('/departments');
    }

    changeNameHandler =(event) =>{
        this.setState({name: event.target.value});
    }

    changeDepartmentHandler =(event) =>{
        this.setState({department: event.target.value});
    }

    changeDepartmentPhoneNumberHandler =(event) =>{
        let depDet = this.state.departmentDetail;
        depDet.phoneNumber = event.target.value;
        this.setState({
            departmentDetail: depDet
        });
    }

    changeDepartmentAddressHandler =(event) =>{
        let depDet = this.state.departmentDetail;
        depDet.address = event.target.value;
        this.setState({
            departmentDetail: depDet
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Department</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name of Department</label>
                                        <input placeholder="Name of Department" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Type of Department</label>
                                        <input placeholder="Type of Department" name="department" className="form-control" 
                                            value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Departments phone number</label>
                                        <input placeholder="Departments phone number" name="phoneNumber" className="form-control" 
                                            value={this.state.departmentDetail.phoneNumber} onChange={this.changeDepartmentPhoneNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Departments address</label>
                                        <input placeholder="Departments address" name="address" className="form-control" 
                                            value={this.state.departmentDetail.address} onChange={this.changeDepartmentAddressHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateDepartment}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateDepartmentComponent;