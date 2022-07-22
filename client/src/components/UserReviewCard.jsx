import React from 'react'

const UserReviewCard = ({ review, books }) => {

  const bookInfo = books.find(book => book.id === review.book_id)

  

  const reviewContent = () => {
    if (review.content) {
      if (bookInfo) {
        return (
          <div id="review-card">
            <p>{ review.content }</p>
            <p>- { bookInfo.title }</p>
          </div>
        )
      }
    }
  }


  return (
    <div>
        { reviewContent() }
    </div>
  )
}


export default UserReviewCard