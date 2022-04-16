const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const authorController = require('./controllers/author.controler')
const sectionController = require('./controllers/section.controler')
const bookController = require('./controllers/book.contriler')




const PORT = process.env.PORT ||8000;

const DB_URL = "mongodb+srv://satya123:Satya123cluster0.r7pwt.mongodb.net/myfirst.dataBase?retryWrites=true&w=majority"
 


const app = express()
app.use(express.json());
app.use(cors());
app.use("/authors", authorController);
app.use("/section",sectionController);
app.use("/books", bookController);


const connect = () => {
    return mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
}

// app.get("/books",(req,res)=>{})
// app.get("/books/:id",(req,res)=>{})
// app.post("/books",(req,res)=>{})
// app.patch("/books/:id",(req,res)=>{})
// app.delete("/books/:id",(req,res)=>{})


// app.get("/author",(req,res)=>{})
// app.get("/author/:id",(req,res)=>{})
// app.post("/author",(req,res)=>{})
// app.patch("/author/:id",(req,res)=>{})
// app.delete("/author/:id",(req,res)=>{})


// app.get("/section",(req,res)=>{})
// app.get("/section/:id",(req,res)=>{})
// app.post("/section",(req,res)=>{})
// app.patch("/section/:id",(req,res)=>{})
// app.delete("/section/:id",(req,res)=>{})


app.listen(PORT, async()=>{
    try{
        await connect();
        console.log('listening on port' + PORT)

    }
    catch(err){
        console.log(err.message)
    }
})
