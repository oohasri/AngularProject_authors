const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter a name"],
        minlength: [3, "Min length is 3 chars long"],
    },
}, {timestamp: true});

const Author = mongoose.model("Author", AuthorSchema);