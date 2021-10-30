const mongoose = require('mongoose')
const Schema = mongoose.Schema
const person = new Schema({
    name:{type: String,require: true},
    age: Number,
    favoriteFoods:[String]
})
module.exports = mongoose.model('person',person)