const mongoose = require("mongoose");

const mongourl = "mongodb+srv://ig25347869:3C6038vhjLDls0Eg@cluster0.luicjxp.mongodb.net/?retryWrites=true&w=majority"


module.exports = ()=>{
    mongoose.connect(mongourl, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("connection is succesfulll")})
    .catch((err)=>{console.log("error occures" + err )});
    
}