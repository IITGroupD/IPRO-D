import React from 'react'
import { useState, useEffect } from 'react'
import books from '../modules/books'
function Post({setBookList, bookList}) {
  const [newBookname, setBookname] = useState('')
  const [newBookprice, setnewBookprice] = useState('')


  const handleChangeBookname = (event) => {
    console.log(event.target.value)
    setBookname(event.target.value)
  }
  const handleChangeBookprice = (event) => {
    console.log(event.target.value)
    setnewBookprice(event.target.value)
  }



  const addBook = (event) =>{
    event.preventDefault()
    const bookObj = {
      sellerName: 'janeDoe',
      bookName: newBookname,
      price: newBookprice,
      author: 'dummy author',
      year: 1978,
      location: 123456,
      quality: 'good',
      image: 'dummy image'
    }

    books
    .create(bookObj)
    .then(book => {
      console.log('A new book has created!')
      setBookList(bookList.concat(book));
    })
  }

    return (
      <div className="Post">
        <form onSubmit={addBook}>
        <label>
          Book Name:
          <input type="text" value={newBookname} onChange={handleChangeBookname} />
        </label>
        <div>
        <label>
          Price:
          <input type="text" value={newBookprice} onChange={handleChangeBookprice} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>   
      </div>
    );
  }
export default Post;
