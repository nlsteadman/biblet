import React from 'react'

const ReviewCard = ({ review }) => {

  const showReviews = () => {
    if (review) {
      if (review.content) {
        return (
          <div>
            <ul id="rainbow-ul">
              <li>{ review.content }</li>
              <p>- { review.user.username }</p>
            </ul>
          </div>
        )
      }
    }
  }

  return (
    <div>
      <div>{ showReviews() }</div>
    </div>
  )
}


export default ReviewCard