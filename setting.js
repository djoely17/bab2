let mongoose = require('mongoose')
let validator = require('validator')

let settingSchema = new mongoose.Schema({
  baseSalary: {
    type: double,
    required: true
  },
  positionName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Setting', settingSchema)