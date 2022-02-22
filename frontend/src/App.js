import './App.css';
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
    </div>
  );
}

export default App;
