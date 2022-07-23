import React from 'react'

const ReviewCard = ({ review }) => {

  return (
    <div>
      <ul id="rainbow-ul">
        <li>{ review.content }</li>
        <p>- { review.user.username }</p>
      </ul>
    </div>
  )
}


export default ReviewCard