import React from 'react'

const Employee = ({employee}) => {
     //console.log(employee);
    return (
        <li>
            <h3>{employee.firstName} {employee.lastName}</h3>
        </li>
    )
}

export default Employee
