import express from 'express';
import {getEmployeesController,addEmployeeController}from '../controllers/employees.js'

const router=express.Router();

router.get("/",getEmployeesController);
router.post("/addEmployee",addEmployeeController);
export default router;