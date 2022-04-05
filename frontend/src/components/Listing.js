import React from 'react'
import './Listing.css'
export default function Listing(props){
    const {menu, book, handleDelete, loginData}=props

    const handleClick = () => {
        handleDelete(book.id)
    }

    return(
        <div className='item'>
            {loginData && <button onClick={handleClick}>Delete</button>}
            <h3>{book.bookName}</h3>
            <h4>Price: {book.price}</h4>
            <h4>Seller: {book.sellerName}</h4>
        </div>
    );
}
