let mongoose = require('mongoose')
let validator = require('validator')

let profilSchema = new mongoose.Schema({
  birthDate: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  joinDate: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nip: {
    type: String,
    required: true
  },
  position: {
    type: Schema.Types.ObjectId, ref: "Setting"
  }
})

module.exports = mongoose.model('Profil', profilSchema)