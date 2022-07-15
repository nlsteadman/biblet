import React from 'react'

const TagBookCard = ({ book }) => {


  return (
    <div id="bookcard">
        <div id="bookimage">
            <img src={ book.image_url } alt="book cover" height="450" width="300" />
        </div>
        <div id="bookinfo">
            <p>Author: { book.author_id }</p>
            <p>{ book.description }</p>
        </div>
    </div>
  )
}

export default TagBookCard