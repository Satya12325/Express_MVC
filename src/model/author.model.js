const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    first_name: {type: 'string',required: true, unique: true},
    last_name: {type: "string", required: true},
    books: [
        {type:mongoose.Schema.Types.ObjectId, ref:"book"},

    ],
});


const Author = mongoose.model('author', authorSchema);


module.exports =  Author;