import React from 'react'

const ReviewCard = ({ review }) => {

  return (
    <div>
        <p>{ review.content }</p>
        <p>- { review.user.username }</p>
    </div>
  )
}


export default ReviewCard