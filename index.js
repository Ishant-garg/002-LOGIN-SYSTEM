require('dotenv').config();
const express = require("express")
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const dbconnect = require('./dbconnect');

const mainRoute = require('./routes/index')
var bodyParser = require('body-parser')


app.use('/' ,mainRoute)
app.get('/test' ,(req ,res)=>  res.send("working fuklll"))

dbconnect();

app.listen(PORT , ()=>{
    console.log('app is running on port : '+ PORT);
})

