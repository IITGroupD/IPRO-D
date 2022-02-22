import React from 'react'
export default function Listing(props){
    const {menu,book}=props
    return(
        <div className="Listing">
            <h3>{book.bookName}</h3>
            <h4>Price: {book.price}</h4>
            <h4>Seller: {book.sellerName}</h4>
        </div>
    );
}
