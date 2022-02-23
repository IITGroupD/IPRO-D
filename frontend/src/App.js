import './App.css';
import Post from './components/Post';
import Display from './components/Display';
import SearchBar from './components/SearchBar';
import FilterSlider from "./components/FilterSlider";
import Filter from './components/Filter';
import books from './modules/books'
import React, { useState, useEffect } from 'react'

function App() {
  const [bookList, setBookList] = useState([])
  const [value, setValue] = useState(0);
  const [distance, setDistance] = useState(0);
  
  
  useEffect(() => {
    books.getAll()
      .then(books => setBookList(books))
  }, [])
  
  const handleChange = event =>{
    setValue(event.target.value)
  }
  
  const handleChangeDistance = event =>{
    setDistance(event.target.value)
  }
  
  return (
    <div className="App">
      {console.log(bookList)}
<<<<<<< HEAD
    <Post />
    <SearchBar />
    <Filter />
    <Display books={bookList}/>
=======
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
>>>>>>> d3a22607dbd8f2203542605a87b3586b88a68460
    </div>
  );
};

export default App;
