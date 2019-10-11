let mongoose = require('mongoose')
let validator = require('validator')

let daftarLemburSchema = new mongoose.Schema({
  nip: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  overtime: {
    type: double,
    required: true
  }
})

module.exports = mongoose.model('daftarLembur', daftarLemburSchema)