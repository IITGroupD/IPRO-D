import './App.css';
import Post from './Post';
import Display from './Display';
import SearchBar from './SearchBar';
import Filter from './Filter';
import books from './modules/books'
import React, { useState, useEffect } from 'react'
function App() {
  const [ bookList, setBookList] = useState([])
  
  useEffect(() => {
    books.getAll()
      .then(books => setBookList(books))
  }, [])
  return (
    
    <div className="App">
      {console.log(bookList)}
    <Post />
    <SearchBar />
    <Filter />
    <Display books={books}/>
    </div>
  );
}

export default App;
