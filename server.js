const express = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(express.json());


const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/relational", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
};


