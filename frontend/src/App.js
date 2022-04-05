import './App.css';
import Post from './components/Post';
import Display from './components/Display';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import books from './modules/books';
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login'

function App() {
  const [bookList, setBookList] = useState([])
  const [value, setValue] = useState(100)
  const [distance, setDistance] = useState(100)
  const [loginData, setLoginData] = useState(null)

  useEffect(() => {
    books.getAll()
      .then(books => setBookList(books))
  }, [])

  const handleDelete = id => {
    books.remove(id)
      .then(() => setBookList(bookList.filter(book => book.id !== id)))
      .catch(e => {
        alert('Error: delete not successful')
        console.log(e)
      })
  } 
  
  const handleChange = event =>{
    setValue(parseInt(event.target.value))
  }
  
  const handleChangeDistance = event =>{
    setDistance(parseInt(event.target.value))
  }

  const handleLogin = async (googleData) => {
    setLoginData({
      name: googleData.Du.tf,
      email: googleData.Du.tv
    })
  }

  const handleLogOut = () => {
    setLoginData(null)
  }

  const handleFailure = (result) => {
    alert('Failed to login')
  }
  
  return (
    <div className="grid-wrapper">
      <img src = {'/bb.png'} alt = "Logo"/>
      {loginData && <Post setBookList={setBookList} bookList={bookList} loginData={loginData}/>}
      <SearchBar />
      {loginData 
        ? 
          (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogOut}>Logout</button>
            </div>
          )
        : 
          (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}>   
            </GoogleLogin>
          )
      }
      <Filter 
        handleChangeDistance={handleChangeDistance}
        handleChange={handleChange}
      />
      <Display 
        books={bookList}
        value={value}
        distance={distance}
        placeholderZip={60616}
        loginData={loginData}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
