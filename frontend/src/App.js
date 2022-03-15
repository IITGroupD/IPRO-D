import './App.css';
import Post from './components/Post';
import Display from './components/Display';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import books from './modules/books';
import React, { useState, useEffect } from 'react';


function App() {
  const [bookList, setBookList] = useState([])
  const [value, setValue] = useState(100);
  const [distance, setDistance] = useState(100);
  
  


  useEffect(() => {
    books.getAll()
      .then(books => setBookList(books))
  }, [])
  
  const handleChange = event =>{
    setValue(parseInt(event.target.value))
  }
  
  const handleChangeDistance = event =>{
    setDistance(parseInt(event.target.value))
  }
  
  return (
    <div className="grid-wrapper">
      {console.log(bookList)}
      <img src = {'/bb.png'} alt = "Logo"/>
      <Post setBookList = {setBookList}
            bookList = {bookList}/>
      <SearchBar />
      <Filter 
        handleChangeDistance={handleChangeDistance}
        handleChange={handleChange}
      />
      <Display 
        books={bookList}
        value={value}
        distance={distance}
        placeholderZip={60616}
      />
    </div>
  );
};

export default App;
