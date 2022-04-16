const mongoose = require('mongoose');


const sectionSchema = new mongoose.Schema({
    name: {type: 'string',required: true},
    books: [{type:mongoose.Schema.Types.ObjectId, ref:"book"}],
});


const Section = mongoose.model('section', sectionSchema);


module.exports =  Section;