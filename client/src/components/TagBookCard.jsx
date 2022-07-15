import React from 'react'

const TagBookCard = ({ book, authors }) => {

const authorInfo = authors.find(author => author.id === book.author_id)

  return (
    <div id="bookcard">
        <div id="bookimage">
            <img src={ book.image_url } alt="book cover" height="450" width="300" />
        </div>
        <div id="bookinfo">
            <p>Author: { authorInfo.name }</p>
            <p>{ book.description }</p>
        </div>
    </div>
  )
}

export default TagBookCard