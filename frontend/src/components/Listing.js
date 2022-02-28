import React from 'react'
import './Listing.css'
export default function Listing(props){
    const {menu,book}=props
    return(
        <div className='item'>
            <h3>{book.bookName}</h3>
            <h4>Price: {book.price}</h4>
            <h4>Seller: {book.sellerName}</h4>
        </div>
    );
}
