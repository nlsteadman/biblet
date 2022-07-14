import React from 'react'

const ReviewCard = ({ review }) => {
  console.log(review)

  return (
    <div>
        <p>{ review.content }</p>
        <p>- { review.user.username }</p>
    </div>
  )
}


export default ReviewCard