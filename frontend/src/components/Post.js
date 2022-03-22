import React from 'react'
import { useState, useEffect } from 'react'
import books from '../modules/books'
function Post({setBookList, bookList}) {
  const [newBookname, setBookname] = useState('')
  const [newBookprice, setnewBookprice] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleChangeBookname = (event) => {
    
    setBookname(event.target.value)
  }
  const handleChangeBookprice = (event) => {
    
    setnewBookprice(event.target.value)
  }

  const onFileSelected = (event) => {
    console.log(event.target.files[0])
    setSelectedFile(event.target.files[0])
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
      image: selectedFile
    }
    console.log(bookObj)
    
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
        <div>
        <label>
          Picture:
          <input type="file"  onChange={onFileSelected} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>   
      </div>
    );
  }
export default Post;
