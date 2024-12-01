const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyJson = require('body-parser');
const taskRoutes = require("./routes/task.route");
require('dotenv').config()
// const taskModel = require('./models/task.model.js')
// const TaskService = require('./services/task.service.js')

app.use(cors());
app.use(bodyJson.json())

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB connected');
    }
    catch(err){
        console.log('Error in connecting DB',err)
    }
}



connectDB();

// console.log(taskModel)

// const TaskService = require("./services/task.service");

// const TaskServiceInstance = new TaskService();
// console.log(
//   TaskServiceInstance.find,
//   TaskServiceInstance.create,
//   TaskServiceInstance.update,
//   TaskServiceInstance.delete
// );


// const {
//     getTasks,
//     createTask,
//     updateTask,
//     deleteTask,
//   } = require("./controllers/task.controller");
  
//   console.log(getTasks, createTask, updateTask, deleteTask);



app.use("/tasks", taskRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server has started with port ${process.env.PORT}`)
})