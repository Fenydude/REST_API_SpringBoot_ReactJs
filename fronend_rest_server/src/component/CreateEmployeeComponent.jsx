import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            depId: this.props.match.params.depId,
            id: this.props.match.params.id,
            name: '',
            surname:'',
            salary:'',
            employeeDetail:{
                city:'',
                phoneNumber:'',
                email:''
            }
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);

        this.saveOrUpdateDepartment = this.saveOrUpdateDepartment.bind(this);
    }


    componentDidMount(){
        console.log(this.state.id);
        if(this.state.id == '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then((res) =>{
                let employee = res.data;
                this.setState({name: employee.name,
                    surname: employee.surname,
                    employeeDetail: employee.employeeDetail
                });
            });
            console.log('pizdec');
            
        }
    }
    
    saveOrUpdateDepartment = (e)=>{
        e.preventDefault();
        let employee = {id: this.state.id, name:this.state.name, surname: this.state.surname, salary: this.state.salary, employeeDetail: this.state.employeeDetail, departmentId : this.state.depId};
        console.log('employee => ' + JSON.stringify(employee));

        if(this.state.id == '_add'){
            employee.id = 0;
            console.log('here')
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/departments');
            });
        }else{
            EmployeeService.updateEmployee(employee).then(res => {
                this.props.history.push('/departments');
            })
        }
    }

    cancel(){
        this.props.history.push('/departments');
    }

    changeNameHandler =(event) =>{
        this.setState({name: event.target.value});
    }

    changeSurnameHandler =(event) =>{
        this.setState({surname: event.target.value})
    }

    changeSalaryHandler =(event) =>{
        this.setState({salary: event.target.value})
    }

    changeCityHandler =(event) =>{
        let emplDetail = this.state.employeeDetail;
        emplDetail.city = event.target.value;
        this.setState({
            employeeDetail: emplDetail
        })
    }

    changePhoneNumberHandler =(event) =>{
        let emplDetail = this.state.employeeDetail;
        emplDetail.phoneNumber = event.target.value;
        this.setState({
            employeeDetail: emplDetail
        })
    }

    changeEmailHandler =(event) =>{
        let emplDetail = this.state.employeeDetail;
        emplDetail.email = event.target.value;
        this.setState({
            employeeDetail: emplDetail
        })
    }





    

    getTitle(){
        if(this.state.id == '_add'){
            return <h3 className="text-center">Add Employee</h3>;

        }else{
            return <h3 className="text-center">Update Employee</h3>;
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name of Employee</label>
                                        <input placeholder="Name of Employee" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Surname of Employee</label>
                                        <input placeholder="Surname of Employee" name="surname" className="form-control" 
                                            value={this.state.surname} onChange={this.changeSurnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input placeholder="Salary" name="salary" className="form-control" 
                                            value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input placeholder="City" name="city" className="form-control" 
                                            value={this.state.employeeDetail.city} onChange={this.changeCityHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                            value={this.state.employeeDetail.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="City" name="city" className="form-control" 
                                            value={this.state.employeeDetail.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateDepartment}>Save</button>
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

export default CreateEmployeeComponent;