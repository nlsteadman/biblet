import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({ book }) => {
    const navigate = useNavigate();

  return (
    <div>
        <img src={ book.image_url } alt="book cover" height="400" width="250" />
        <p>Author: { book.author }</p>
        <p>{ book.description }</p>
        <button onClick={ () => navigate(`/books/${ book.id }`) }>Click for more</button>
        <br />
        <br />
        <br />
    </div>
  )
}

export default BookCard