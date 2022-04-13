import React, { useState } from 'react' ;
import '../App.css';
import image from './image/image.png';
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={image} alt="" className="logo"/>
            <input  type="text" classNameame="search" placeholder="Search books.." />
            
        </div>
    )
}

export default Navbar