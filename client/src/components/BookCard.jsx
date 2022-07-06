import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({ book }) => {
    const navigate = useNavigate();

  return (
    <div id="bookcard">
        <div id="bookimage">
            <img src={ book.image_url } alt="book cover" height="450" width="300" />
        </div>
        <div id="bookinfo">
            <p>Author: { book.author.name }</p>
            <p>{ book.description }</p>
            <button onClick={ () => navigate(`/books/${ book.id }`) }>Click for more</button>
        </div>
    </div>
  )
}

export default BookCard