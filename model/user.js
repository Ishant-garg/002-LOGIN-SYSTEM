// const user = [
//     {
//         id : 455,
//         email : 'ishantgarg@gmail.com',
//         password : '8860800227'
//     },
//     {
//         id : 453,
//         email : 'biot@gmail.com',
//         password : '8860800227'
//     }
// ]

// module.exports = user;
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type : String,
        required : true
    },
    password: String,
    marks: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
