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
/*.then(() => {
    console.log('[sucsess] DB Connected.');
}).catch(error => {
    console.log("[error] can't connect to DB : " + error);
})
*/
app.get('/', (req, res) => {
    res.send("<h1>hello</h1>");
});

app.post('/addUser', async (req, res) => {
    console.log(req.body);
    let task = { 
        time:req.body.time,
        text:req.body.text
    };
    let newTask = new Task(task);
    await newTask.save();
    res.json(req.body);
    //res.json(newTask);
})


app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});