import React from 'react'
import { useState, useEffect } from 'react'
import books from '../modules/books'
function Post({setBookList, bookList, loginData}) {
  const [newBookname, setBookname] = useState('')
  const [newBookprice, setnewBookprice] = useState('')
 
  const handleChangeBookname = (event) => {
    console.log("book selected: ", event.target.value)
    setBookname(event.target.value)
  }

  const handleChangeBookprice = (event) => {
    setnewBookprice(event.target.value)
  }

  const addBook = (event) =>{
    event.preventDefault()
    const bookObj = {
      sellerName: 'janeDoe',
      email: loginData.email,
      bookName: newBookname,
      price: newBookprice,
      author: 'dummy author',
      year: 1978,
      location: 123456,
      quality: 'good',
      image: "img"
    }
    console.log(bookObj)
    setnewBookprice('')
    setBookname('')
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
          <select name="selectList" value={newBookname} onChange={handleChangeBookname} >
            <option value = ""></option>
            <option value = "2938 Turncoat">2938 Turncoat</option>
            <option value = "Elysium Firing">Elysium Firing</option>
            <option value = "Equinox of Kaus">Equinox of Kaus</option>
            <option value = "Mark of Terror">Mark of Terror</option>
            <option value = "Mister Nice">Mister Nice</option>
            <option value = "Sealed with a Kiss">Sealed with a Kiss</option>
            <option value = "Storms of Solaris">Storms of Solaris</option>
            </select>
        </label>
        <div>
        <label>
          Price:
          <input type="text" value={newBookprice} onChange={handleChangeBookprice} />
        </label>
        </div>
        <div>
        </div>
        <input type="submit" value="Submit" />
      </form>   
      </div>
    );
  }
export default Post;
