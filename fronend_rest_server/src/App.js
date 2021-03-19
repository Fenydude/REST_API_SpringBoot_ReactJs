import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DepartmentComponent from './component/DepartmentComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import CreateDepartmentComponent from './component/CreateDepartmentComponent';
import UpdateDepartmentComponent from './component/UpdateDepartmentComponent';
import EmployeeComponent from './component/EmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="App">
              <Switch>
                <Route path="/" exact component = {DepartmentComponent}/>
                <Route path="/departments" exact component = {DepartmentComponent}/>
                <Route path="/add-department/:id"exact component = {CreateDepartmentComponent}/>
                <Route path="/department/:id/employees" component = {EmployeeComponent}/>
                <Route path="/add-employee/:depId/:id" component = {CreateEmployeeComponent}/>
               
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
