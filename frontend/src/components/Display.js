import Listing from './Listing'
import React from 'react'
import './Display.css'
export default function Display(props){
    const {books} = props
    return (
        <div className='listings'>
            {books.length > 0 
                ? books.map(book => <Listing book={book} key={book.id}/>) 
                : <h3>No listings!</h3>}
        </div>
    )
}
