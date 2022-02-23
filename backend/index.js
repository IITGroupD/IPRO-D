const express = require('express')
const app = express()
app.use(express.json())
var morgan = require('morgan')
app.use(morgan('tiny'))
const cors = require('cors')
app.use(cors())
require('dotenv').config()

const Book = require('./models/books')

app.get('/api/books', (req, res) => {
  Book.find({})
    .then(books => {
      res.json(books)
    })
    .catch(error => console.log(error))
})

app.post('/api/books', (req, res) => {
  const body = req.body
  const book = new Book({
    sellerName: body.sellerName,
    bookName: body.bookName,
    price: body.price,
    author: body.author,
    year: body.year,
    location: body.location,
    quality: body.quality,
    image: body.image
  })
  book.save()
    .then(savedBook =>{
      res.json(savedBook)
    })
    .catch(error => console.log(error))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
