let mongoose = require('mongoose')
let validator = require('validator')

let profilSchema = new mongoose.Schema({
  birthDate: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  }
  joinDate: {
    type: Date,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  position: {
    type: Schema.Types.ObjectId, ref: "Setting"
  }
})

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
  },
  profil: [ profilSchema ]
})

module.exports = mongoose.model('User', userSchema)