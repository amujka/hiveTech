import mongoose from "mongoose";
import Employee from '../model/employee.js'
export const getEmployeesController=async(req,res)=>{
    try {
        const allEmployees=await Employee.find();
        console.log(allEmployees);
         res.status(200).json(allEmployees);
    } catch (error) {
         res.status(404).json({ message: error });
    }
};

export const addEmployeeController=async(req,res)=>{
    const employee=req.body;
    const newEmployee=new Employee(employee);
  try {
      await newEmployee.save();
        res.status(200).json(newEmployee);
  } catch (error) {
       res.status(404).json({ message: error });
  }
  
};