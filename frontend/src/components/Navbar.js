import React from 'react' ;
import '../App.css';
import image from './image/image.png';
import "./Navbar.css";
import LogIn from './LogIn.js'

const Navbar = ({loginData, handleLogOut, handleLogin, handleFailure}) => {
    return (
        <div className="Navbar">
            <img src={image} alt="" className="logo"/>
            <input  type="text" classNameame="search" placeholder="Search books.." />
            <LogIn
                loginData={loginData} 
                handleLogOut={handleLogOut} 
                handleLogin={handleLogin} 
                handleFailure={handleFailure}
            />
        </div>
    )
}

export default Navbar
