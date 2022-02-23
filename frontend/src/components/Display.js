import Listing from './Listing'
import React from 'react'

export default function Display(props){
    const {books} = props
    let listings;
    if (books.length > 0) {
        listings = books.map(book => <Listing book={book} key={book.id}/>)
    } else {
        listings = <h3>No listings!</h3>
    }
    return (
        <div className='filter'>
            {listings}
        </div>
    )

}
