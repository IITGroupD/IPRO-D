import Listing from './Listing'
import React from 'react'

export default function Display(){
    const listDisplay=(props)=>{
        const {menu,books}=props
    return(
        <div className="Filter">
            <Listing />
        </div>
    );
    }
}
