import React, { useState, useEffect } from 'react';
import pic from '../assets/pic.png';
import { useNavigate } from 'react-router-dom';
import UserBookCard from './UserBookCard';
import UserReviewCard from './UserReviewCard';


const UserPage = ({ currentUser, reviews, books, loggedIn, authors, updateReview, deleteReview }) => {
  const navigate = useNavigate();
  const [myReviews, setMyReviews] = useState([]);
  const [finished, setFinished] = useState([]);
  const [notFinished, setNotFinished] = useState([]);
  
  useEffect(() => {
    if( !loggedIn ) {
        navigate('/login');
    }
  }, [loggedIn, navigate])

  useEffect(() => {
    if( loggedIn ) {
      if (reviews) {
        setMyReviews(reviews.filter(myReviews => myReviews.user_id === currentUser.id))
      }
    }
  }, [loggedIn, currentUser.id, reviews])

  useEffect(() => {
    if( myReviews ) {
      setFinished(myReviews.filter(review => review.finished === true))
    }
  }, [myReviews])

  useEffect(() => {
    if( myReviews ) {
      setNotFinished(myReviews.filter(review => review.finished === false))
    }
  }, [myReviews])

  
  const readingListFinished = finished.map(review => <UserBookCard key={ review.id } review={ review } authors={ authors } loggedIn={ loggedIn } updateReview={ updateReview } deleteReview={ deleteReview } />)
   
  const readingListNotFinished = notFinished.map(review => <UserBookCard key={ review.id } review={ review } authors={ authors } loggedIn={ loggedIn } updateReview={ updateReview } deleteReview={ deleteReview } />)


  const toBeRead = () => {
    if (notFinished) {
      if (readingListNotFinished.length === 0) {
        return (
          <div>
            <h3>Nothing to read? <button onClick={() => navigate('/books')}>Start adding books!</button></h3>
          </div>
        )
      }
      if (readingListNotFinished.length > 0) {
        return (
          <div>
            { readingListNotFinished }
          </div>
        ) 
      }
    }
  }

  const reviewCards = () => {
    if (myReviews) {
      return myReviews.map(review => <UserReviewCard key={ review.id } review={ review } books={ books } />)
    }
  }
  
  return (
    <div>
      <div id="header">
        <div id="logo">
            <img src={ pic } alt="logo" height="140px" width="140px" />
        </div>
        <div id="title">
            <h1>Bib*let</h1>
        </div>
        <div id="logo">
            <img src={ pic } alt="logo" height="140px" width="140px" />
        </div>
      </div>

      <div id="user-greeting">
        <div id="user-greeting-image">
          <h1>*</h1>
        </div>
        <div id="greeting">
          <h2>Hi, { currentUser.username }! I missed you! Let's read!</h2>
        </div>
        <div id="user-greeting-image">
          <h1>*</h1>
        </div>
      </div>

      <div>
        <div>
          <h1 id="reading-list">Reading List:</h1>
          <div>{ toBeRead() }</div>
        </div>
        
        <div>
          <h1 id="reading-list">Finished books:</h1>
          <div>{ readingListFinished }</div>
        </div>
        
        <div>
          <h1 id="reading-list">My reviews:</h1>
          <div>{ reviewCards() }</div>
        </div>
      </div>
    </div>
  )
}

export default UserPage