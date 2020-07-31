const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Task = require('./Model/task.model');
const mongoose = require('mongoose');

const URL = "mongodb+srv://test:test@cluster0.kees0.mongodb.net/taskmemo?retryWrites=true&w=majority";
//const URL  ="mongodb+srv://admin:admin@cluster0-kvl4q.gcp.mongodb.net/test?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


mongoose.connect(URL,{ 
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('[sucsess] DB Connected.');
})

app.get('/', (req, res) => {
    res.send("<h1>hello</h1>");
});

app.post('/addTask', async (req, res) => {
    const newTask = new Task({
        text:req.body.text
    });
    const saveTask = await newTask.save();
    res.json(saveTask);
})

app.get('/getTask', async (req, res) => {
    try {
        const task = await Task.find();
        res.json(task);
    } catch (error) {
        res.json({ message:error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});