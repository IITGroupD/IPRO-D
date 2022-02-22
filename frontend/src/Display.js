import Listing from './Listing'
import React from 'react'

export default function Display(props){

    const listDisplay=(props)=>{
        const {books}=props
        if(books.length>0){
        return(
            books.map((book,index)=>{
    return(
        <div className="Filter">
            <Listing book={book} key={book.id} />
        </div>
    )}
        )
        )
    }
    else{
        return(<h3>No Listings</h3>)
    }
}
return(
    <>
    {listDisplay(props)}
    </>
)
}
