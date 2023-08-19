const mongoose = require('mongoose');

const categoryschema = new mongoose.Schema({
    name:String
})

const category = mongoose.model('category', categoryschema);

module.exports = category;