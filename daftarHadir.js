let mongoose = require('mongoose')
let validator = require('validator')

let daftarHadirSchema = new mongoose.Schema({
  nip: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  hadir: {
    type: double,
    required: true
  }
})

module.exports = mongoose.model('daftarHadir', daftarHadirSchema)