import React from 'react'
import { useSelector } from 'react-redux';
import Employee from './employee/Employee'
const EmployeesList = () => {
    const employees = useSelector(state => state.employeesReducer)
  
    return (
        <div>
            <h1>EmployeeList</h1>
            <ul>
                {employees.map((employee)=> <Employee key={employee._id} employee={employee}/>)}
            </ul>
        </div>
    )
}

export default EmployeesList
