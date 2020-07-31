const mongoose = require('mongoose');

const task = mongoose.Schema({
    time:{
        type:Date
    },
    text:{
        type:String
    }
});

module.exports = Task = mongoose.model('task',task);