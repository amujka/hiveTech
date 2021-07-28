import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect,} from 'react-router-dom'
  import EmployeesList from './components/employeesList/EmployeesList'
  import AddEmployee from './components/addEmployee/AddEmployee'
  import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import{getEmployeesAction} from './store/actions/employeesActions'
import Header from './components/header/Header'
function App() {


const dispatch = useDispatch();

useEffect(() => {
  dispatch(getEmployeesAction())
  
}, [dispatch])

  return (
    <Router>
          <div className="App">
           <Header/>
            <Switch>
              <Route path="/" exact>
                <EmployeesList/>
              </Route>    
              <Route path="/addEmployee" >
                <AddEmployee/>
              </Route> 
              <Route path="*" >
                <Redirect to="/"/>
              </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
