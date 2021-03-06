const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

  const bookSchema = new mongoose.Schema({
    'sellerName': {
      type: String
    },
    'email': {
      type: String
    },
    'bookName': {
      type: String
    },
    'price': {
      type: String
    },
    'author' : {
      type: String
    },
    'year': {
      type: Number
    },
    'location': {
      type: Number
    },
    'quality': {
      type: String
    },
    'image': {
      type:String
    }
  })

  bookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Book', bookSchema)
