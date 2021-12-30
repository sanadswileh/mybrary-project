const mongoose = require('mongoose');

const authorSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// 'Author' is the name of the table/model
module.exports = mongoose.model('Author', authorSchema)