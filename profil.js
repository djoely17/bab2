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
  userId: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  position: {
    type: Schema.Types.ObjectId, ref: "Setting"
  }
})

module.exports = mongoose.model('Profil', profilSchema)