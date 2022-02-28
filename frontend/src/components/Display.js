import Listing from './Listing'
import React from 'react'
import './Display.css'
export default function Display(props){
    const { books, value } = props
    const filteredBooks = (value === 0) ? books : books.filter(book => (parseFloat(book.price) <= value)) 
    return (
        <div className='listings'>
            {filteredBooks.length > 0 
                ? filteredBooks.map(book => <Listing book={book} key={book.id}/>) 
                : <h3>No listings!</h3>}
        </div>
    )
}
