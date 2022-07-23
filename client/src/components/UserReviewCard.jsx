import React from 'react'

const UserReviewCard = ({ review, books }) => {

  const bookInfo = books.find(book => book.id === review.book_id)

  

  const reviewContent = () => {
    if (review.content) {
      if (bookInfo) {
        return (
          <div id="review-card">
            <ul id="rainbow-ul">
              <li>{ review.content }</li>
              <p>- { bookInfo.title }</p>
            </ul>
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