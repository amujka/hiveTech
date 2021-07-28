import express from 'express';
import {getEmployeesController,addEmployeeController,deleteEmployeeController,editEmployeeController}from '../controllers/employees.js'

const router=express.Router();

router.get("/",getEmployeesController);
router.post("/addEmployee",addEmployeeController);
router.delete("/:id",deleteEmployeeController)
router.patch("/:id",editEmployeeController)
export default router;