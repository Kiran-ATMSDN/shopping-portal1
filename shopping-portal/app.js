const express = require("express");
const app = express();
const port = 3000;
const pool = require("./config/config")

const taskRoutes = require("./routes/taskRoutes")
app.use(express.json());

app.use('/tasks', taskRoutes);
app.listen(port,()=>{
    
    console.log(`port is running on ${port}`)
})