import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, headers, getToken } from '../Globals';

const UserBookCard = ({ book, authors, loggedIn, addToFinishedList, myReviews, finished, deleteReview, review }) => {
  const navigate = useNavigate();

  const authorInfo = authors.find(author => author.id === book.author_id)
      
  const handleDone = () => {
    const params = {
      review: {
        finished: true
      }
    }

    if (review) {
      if ( loggedIn ) {
        fetch(baseUrl + "/reviews/" + review.id, {
          method: "PATCH",
          headers: {
            ...headers,
            ...getToken()
          },
          body: JSON.stringify(params)
        })
          .then(r => r.json())
          .then((data) => addToFinishedList(data))
      }
    }
  } 

  const handleDelete = () => {
    if ( loggedIn ) {
      fetch(baseUrl + "/reviews/" + review.id, {
        method: "DELETE",
        headers: {
          ...headers,
          ...getToken()
        }
      })
          .then((data) => deleteReview(review.id))
    }
  }
  
  
  const finishedButton = () => {
    if (review) {
      if (review.finished === false) {
        return (
          <div>
              <button onClick={ handleDone }>Finished reading</button>
          </div>
        )
      }
      if (review.finished === true) {
        return (
          null
        )
      }
    }
  }


  return (
    <div>
      <div id="bookcard">
        <div id="bookimage">
            <img src={ book.image_url } alt="book cover" height="450" width="300" />
        </div>
        <div id="bookinfo">
            <p>Author: { authorInfo.name }</p>
            <p>{ book.description }</p>
            <button onClick={ () => navigate(`/books/${ book.id }`) }>Click for more</button>
            <br/>
            <div>{ finishedButton() }</div>
            <button onClick={ handleDelete }>Remove from list</button>
        </div>
      </div>
    </div>
  )
}

export default UserBookCard