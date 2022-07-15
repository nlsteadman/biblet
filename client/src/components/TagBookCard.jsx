import React from 'react'
import { useNavigate } from 'react-router-dom'

const TagBookCard = ({ book, authors }) => {
  const navigate = useNavigate();

const authorInfo = authors.find(author => author.id === book.author_id)

  return (
    <div id="bookcard">
        <div id="bookimage">
            <img src={ book.image_url } alt="book cover" height="450" width="300" />
        </div>
        <div id="bookinfo">
            <p>Author: { authorInfo.name }</p>
            <p>{ book.description }</p>
            <button onClick={ () => navigate(`/books/${ book.id }`) }>Click for more</button>

        </div>
    </div>
  )
}

export default TagBookCard