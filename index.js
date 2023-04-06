const express = require('express');
const bodyParser = require('body-parser');
// const cuurentDb = require('./db.js');
const currentDb = require('./db,js');
const employeeRoute = require('./Controller/Employ-Controller')
currentDb()

const app = express();
app.use(bodyParser.json());
app.use("/api",employeeRoute)
app.listen(5000,()=>console.log("ruunig on port"))