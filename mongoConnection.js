const mongoose = require('mongoose');
const URL = "mongodb+srv://test:test@cluster0.kees0.mongodb.net/taskmemo?retryWrites=true&w=majority";

const ConnectDB = async () => {
    await mongoose.connect(URL,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = ConnectDB;