import Listing from './Listing'
import React from 'react'

export default function Display(props){
    const {books} = props
    return (
        <div className='filter'>
            {books.length > 0 
                ? books.map(book => <Listing book={book} key={book.id}/>) 
                : <h3>No listings!</h3>}
        </div>
    )

}
