import './App.css';
import Post from './Post';
import Display from './Display';
import SearchBar from './SearchBar';
import {FilterSlider} from "./FilterSlider";
import Filter from './Filter';
import books from './modules/books'
import React, { useState, useEffect } from 'react'

function App() {
  const [ bookList, setBookList] = useState([])
  const [value, setValue] = useState(initValue);
  const [distance, setDistance] = useState(initDistance);
  let initValue = 0
  let initDistance = 0
  
  useEffect(() => {
    books.getAll()
      .then(books => setBookList(books))
  }, [])
  
  const handleChange = event =>{
    setValue(event.target.value)
  }
  
  const handleChangeDistance = event =>{
    setValue(event.target.value)
    console.log(value)
  }
  
  return (
    <div className="App">
      {console.log(bookList)}
      <Post />
      <SearchBar />
      <Filter />
      <Display />
      <FilterSlider
          initValue = {0}
          minValue = {-100}
          maxValue = {100}
          handleChange = {handleChange}
      />
      <FilterSlider
        initValue = {0}
        minValue = {-100}
        maxValue = {100}
        handleChange = {handleChangeDistance}
      />
    </div>
  );
};

export default App;