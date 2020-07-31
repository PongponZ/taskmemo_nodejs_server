const mongoose = require('mongoose');

const task = mongoose.Schema({
    time:{
        type:Date,
        default:Date.now
    },
    text:{
        type:String
    }
});

module.exports = Task = mongoose.model('task',task);