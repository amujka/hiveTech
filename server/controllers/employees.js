import mongoose from "mongoose";
import Employee from '../model/employee.js';

export const getEmployeesController=async(req,res)=>{
    try {
        const allEmployees=await Employee.find();
        //console.log(allEmployees);
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

export const deleteEmployeeController=async(req,res)=>{
  const {id:_id}=req.params;
  try {
     if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Employee not found");
  }
     await Employee.findByIdAndDelete(_id);
  res.json("Post deleted");
  } catch (error) {
    console.log(error);
  }

}

export const editEmployeeController=async(req,res)=>{
    let {id:_id}=req.params;

    let employee=req.body;
    try {
       if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Employee not found");
  }
      const editedEmployee=await Employee.findByIdAndUpdate(_id,employee,{new:true})

      res.status(200).json(editedEmployee)
    } catch (error) {
     console.log(error); 
    }
}