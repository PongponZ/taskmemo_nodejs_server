const mongoose = require('mongoose');

const task = mongoose.Schema({
    time:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String
    },
    text:{
        type:String
    }
});

module.exports = Task = mongoose.model('task',task);