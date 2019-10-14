let mongoose = require('mongoose')
let validator = require('validator')

let daftarHadirSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  date: {
    type: Date,
    required: true
  },
  hadir: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('daftarHadir', daftarHadirSchema)