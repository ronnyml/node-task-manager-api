const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
