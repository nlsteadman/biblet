import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = ({ books }) => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const bb = books.find(b => b.id.toString() === id);
        setBook(bb);
    }, [books, id])

  return (
    <div>
        <img src={ book.image_url } alt="a book cover" height="400" width="250"/>
        <p>Author: { book.author_id }</p>
        <p>{ book.description }</p>
    </div>
  )
}

export default BookDetail