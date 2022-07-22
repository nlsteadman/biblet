import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl, headers, getToken } from '../Globals';


const ReviewForm = ({ loggedIn, updateReview }) => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const id = useParams();



  const handleSubmit = e => {
      e.preventDefault();
      const params = {
        review: {
          content: content
        }
      }
      
      if (loggedIn) {
        fetch(baseUrl + "/reviews/" + id.id, {
          method: "PATCH",
          headers: {
            ...headers,
            ...getToken()
          },
          body: JSON.stringify(params)
        })
          .then(r => r.json())
          .then(data => {
            updateReview(data);
            navigate("/users/:id")
          })
      }
  }



  return (
    <div>
      <h1 id="review-form-title">Create Review</h1>

      <form id="review-form" onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="content">Review: </label>
          <textarea type="text" name="content" id="content" value={ content } onChange={ e => setContent(e.target.value) } />
        </div><br/>
        <br />
        <input type="submit" value="Submit review" />
      </form><br/><br/>
    </div>
  )
}

export default ReviewForm