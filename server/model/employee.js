import mongoose from "mongoose";

const { Schema } = mongoose;
const employeeSchema=new Schema({
firstName:String,
lastName:String,
email:String,
phoneNum:Number,
OIB:Number,
avatar:String,
department:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

  const Employee = mongoose.model('Employee', employeeSchema);
  export default Employee;
