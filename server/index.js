import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js'
const app=express();
app.use(cors());
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(express.urlencoded({extended: true}));
app.use('/hiveTech',routes);

const PORT=process.env.PORT || 5000;
const CONNECTION_URL="mongodb+srv://amujka:amujka123@cluster0.x0bhb.mongodb.net/employeesList?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>{console.log(`Server started at ${PORT}`);}))
.catch((err)=>console.log(err))

mongoose.set('useFindAndModify',false);//so we dont get any warnings in console