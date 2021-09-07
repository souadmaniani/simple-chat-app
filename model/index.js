const mongoose = require('mongoose')
const {Schema, model} = mongoose
const msgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
})
module.exports = new model('message', msgSchema)