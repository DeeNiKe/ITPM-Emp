import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from "./components/layouts/topnav";
import EMPSideNav from "./components/layouts/EMPsidenav";
import AddEmployee from "./components/employee/AddEmployee";
import ViewEmployees from "./components/employee/ViewAllEmployees";
import ViewOneEmployee from "./components/employee/ViewOneEmployee";
import AddSalary from "./components/salary/AddSalary";
import ViewSalary from "./components/salary/ViewSalary";
import CreateLeave from "./components/leave-management/CreateLeave";
import DisplayLeaves from "./components/leave-management/DisplayLeaves";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Topnav}></Route>

      {/* Employee Manager Routes */}
      <Route path="/employeeManager" exact component={EMPSideNav}></Route>
      <Route exact path="/employeeManager/add" component={AddEmployee}></Route>
      <Route
        exact
        path="/employeeManager/view"
        component={ViewEmployees}
      ></Route>
      <Route
        exact
        path="/employeeManager/view/:id"
        component={ViewEmployees}
      ></Route>
      <Route
        exact
        path="/employeeManager/salary/add"
        component={AddSalary}
      ></Route>
      <Route
        exact
        path="/employeeManager/salary/view"
        component={ViewSalary}
      ></Route>

      {/* Leave Manager Routes */}
      <Route path="/salary-create" exact component={CreateLeave} />
      <Route path="/salary-display" exact component={DisplayLeaves} />
    </BrowserRouter>
  );
}

export default App;
