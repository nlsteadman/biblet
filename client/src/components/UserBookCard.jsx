import React from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, headers, getToken } from '../Globals';

const UserBookCard = ({ authors, loggedIn, updateReview, deleteReview, review }) => {
  const navigate = useNavigate();

  const authorInfo = authors.find(author => author.id === review.book.author_id)

  const authorDisplay = () => {
    if (authorInfo) {
      return (
        <div>
          <p>Author: { authorInfo.name }</p>
        </div>
      )
    }
  }
      
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
          .then((data) => updateReview(data))
      }
    }
  } 

  

  const handleDelete = () => {
    if (review) {
      if ( loggedIn ) {
        fetch(baseUrl + "/reviews/" + review.id, {
          method: "DELETE",
          headers: {
            ...headers,
            ...getToken()
          }
        })
          .then((data) => deleteReview(data))
      }
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
            <img src={ review.book.image_url } alt="book cover" height="550" width="375" />
        </div>
        <div id="bookinfo">
            <div>{ authorDisplay() }</div>
            <br/>
            <p>{ review.book.description }</p>
            <button onClick={ () => navigate(`/books/${ review.book.id }`) }>Click for more</button>
            <br/>
            <div>{ finishedButton() }</div>
            <button onClick={ handleDelete }>Remove from list</button>
            <br/>
            <button onClick={ () => navigate(`/reviews/update/${ review.id }`)}>Leave a review</button>
        </div>
      </div>
    </div>
  )
}

export default UserBookCard