const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, require: true},
    date: { type: Date, default: Date.now},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    text: { type: String, require: true},
    children: { type: Array, default: []} 
})

module.exports = model('Comment', schema)

