import React from 'react'
import './Listing.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'

export default function Listing(props){
    const {menu, book, handleDelete, loginData, handleUpdate} = props
    const [clicked, setClicked] = useState(false)
    const [newPrice, setNewPrice] = useState()

    const handleDeleteClick = () => {
        handleDelete(book.id)
    }

    const handleClick = () => {
        if (loginData.email === book.email) {
            setClicked(true)
        }
    }

    const handleChange = (e) => {
        setNewPrice(e.target.value)
    }

    const handleSubmit = () => {
        handleUpdate({...book, price: newPrice})
        setClicked(false)
    }

    const handleCancel = () => {
        setClicked(false)
        setNewPrice()
    }

    return(
        <div className='item'>
            <Card style={{ width: '18rem', cursor : 'pointer' }} >
                <Card.Img variant="top" src={`/${book.bookName.toLowerCase()}.JPG`} width="400" height="400" />
                <Card.Body>
                    <Card.Title>{book.bookName}</Card.Title>
                    {clicked 
                        ? [<input key={book.id + "1"} onChange={handleChange} style={{marginBottom: '0.5rem'}}></input>, 
                           <Button key={book.id + "2"} variant="primary" onClick={handleSubmit}>Update</Button>,
                           <Button key={book.id + "3"} variant="secondary" onClick={handleCancel}>Cancel</Button>]
                        : <Card.Subtitle className="mb-2 text-muted">${book.price} {loginData && ( loginData.email === book.email && <img src='/edit.png' alt='edit icon' onClick={handleClick} className={'icon'}></img>)}</Card.Subtitle>
                    }
                    <Card.Text>
                     Posted by: {book.sellerName}
                    </Card.Text>
                    <Button variant="primary">See further details</Button>
                    <Button variant="secondary" disabled={loginData && book.email === loginData.email ? false : true} onClick={handleDeleteClick}>Delete</Button>
                </Card.Body>
                </Card>
        </div>
    );
}
