let mongoose = require('mongoose')
let validator = require('validator')

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nip: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)