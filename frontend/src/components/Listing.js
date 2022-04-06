import React from 'react'
import './Listing.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Listing(props){
    const {menu, book, handleDelete, loginData}=props

    const handleClick = () => {
        handleDelete(book.id)
    }

    return(
        <div className='item'>
            <Card style={{ width: '18rem', cursor : 'pointer' }} >
                <Card.Img variant="top" src={`/${book.bookName.toLowerCase()}.JPG`} />
                <Card.Body>
                    <Card.Title>{book.bookName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${book.price}</Card.Subtitle>
                    <Card.Text>
                     Posted by: {book.sellerName}
                    </Card.Text>
                    <Button variant="primary">See further details</Button>
                    <Button variant="secondary" disabled={loginData && book.email === loginData.email ? false : true}onClick={handleClick}>Delete</Button>
                </Card.Body>
                </Card>
        </div>
    );
}
