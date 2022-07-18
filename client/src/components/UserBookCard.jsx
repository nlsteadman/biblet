import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, headers, getToken } from '../Globals';

const UserBookCard = ({ book, authors, loggedIn, addToFinishedList, myReviews, finished }) => {
  const [review, setReview] = useState([]);
  const navigate = useNavigate();

  const authorInfo = authors.find(author => author.id === book.author_id)
  
  const reviewId = myReviews.map(review => review.id)

 
  const handleSubmit = () => {
    const params = {
      review: {
        finished: true
      }
    }

    fetch(baseUrl + "/reviews/" + reviewId, {
      method: "PATCH",
      headers: {
        ...headers,
        ...getToken()
      },
      body: JSON.stringify(params)
    })
      .then(r => r.json())
      .then((data) => setReview(addToFinishedList(data)))
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
            <button onClick={ () => navigate(`/books/${ book.id }`) }>Click for more</button><br/>
            <button onClick={ handleSubmit }>Done reading!</button>
        </div>
    </div>
    </div>
  )
}

export default UserBookCard