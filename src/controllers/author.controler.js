const express = require('express')
const router = express.Router();
const Author = require('../model/author.model')



router.get("/", async(req,res)=>{
    const authors = await Author.find();
    res.status(200).json(authors)
})
router.get("/:id",(req,res)=>{})
router.post("",(req,res)=>{})
router.patch("/:id",(req,res)=>{})
router.delete("/:id",(req,res)=>{})


module.exports = router;