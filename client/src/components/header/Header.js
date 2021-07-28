import React from 'react'
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
             <div>
        <NavLink to="/" exact >
          All employees
        </NavLink>
      </div>
      <span>|</span>
      <div>
        <NavLink to="/addEmployee" >
          Add employee
        </NavLink>
      </div>
        </div>
    )
}

export default Header
