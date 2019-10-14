let mongoose = require('mongoose')
let validator = require('validator')

let daftarLemburSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  date: {
    type: Date,
    required: true
  },
  overtime: {
    type: double,
    required: true
  }
})

module.exports = mongoose.model('daftarLembur', daftarLemburSchema)