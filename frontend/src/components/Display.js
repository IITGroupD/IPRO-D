import Listing from './Listing'
import React from 'react'
import './Display.css'

export default function Display({ books, value, distance, placeholderZip, loginData, handleDelete }){
    const priceFilteredBooks = (value === 100) ? books : books.filter(book => (parseFloat(book.price) <= value)) 
    const zipCodeData = require('zipcode-city-distance')
    const distanceFilteredBooks = (distance === 100) ? books : books.filter(book => (parseInt(zipCodeData.zipCodeDistance(placeholderZip, parseInt(book.zip), 'M')) <= distance))
    return (
        <div className='listings'>
            {priceFilteredBooks.length > 0 && distanceFilteredBooks.length > 0
                ? priceFilteredBooks.filter(book => distanceFilteredBooks.includes(book))
                    .map(book => <Listing book={book} key={book.id} loginData={loginData} handleDelete={handleDelete}/>) 
                : <h3>No listings!</h3>}
        </div>
    )
}
