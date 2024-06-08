const express = require('express')
const mongoose = require("mongoose");
const Messages = require('./model/messages');
const nodemailer = require("nodemailer");
const fs = require('fs');
// connect your database
mongoose.connect("mongodb://127.0.0.1:27017/hdb", {
    useNewUrlParser: true
}).then((con) => {
    console.log("Connected to DBS!!!")
});



const home = fs.readFileSync(`/template/index.html`,'utf-8');

const port = 8000;

const app = express()
var data;
app.use('/images', express.static('/template/images'))
app.use(express.json());

app.get('/style.css', (req, res) => {
    res.sendFile('/template/style.css');
})
app.get('/', (req, res) => {
    res.sendFile(`/template/index.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`/template/about.html`)
})
app.get('/blog', (req, res) => {
    res.sendFile(`/template/blog.html`)
})
app.get('/course', (req, res) => {
    res.sendFile(`/template/course.html`)
})
app.get('/contact', (req, res) => {
    res.sendFile(`/template/contact.html`)
})

app.post('/message', async (req, res) => {
    console.log(req.body)
    data = await Messages.insertMany(req.body);
    res.status(200).send("Data Added")
})


app.listen(port, () => {
    console.log("Listening on PORT : ", port);
})
