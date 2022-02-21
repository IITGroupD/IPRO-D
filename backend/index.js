const express = require('express')
const app = express()
app.use(express.json())
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
