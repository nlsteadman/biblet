import React, { useState, useEffect } from 'react';
import pic from '../assets/pic.png';
import { useNavigate } from 'react-router-dom';
import UserBookCard from './UserBookCard';
import { baseUrl } from '../Globals';

const UserPage = ({ currentUser, reviews, books, loggedIn, authors, addToFinishedList, deleteReview }) => {
  const navigate = useNavigate();
  const [myReviews, setMyReviews] = useState([]);
  const [finished, setFinished] = useState([]);
  const [notFinished, setNotFinished] = useState([]);

  useEffect(() => {
    if( loggedIn ) {
        setMyReviews(reviews.filter(myReviews => myReviews.user_id === currentUser.id));
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

  const read = finished.map(review => [review.book, review])

  const notRead = notFinished.map(review => [review.book, review])

  const readingListFinished = read.map(arr => <UserBookCard key={ arr[0].id } book={ arr[0] } review={ arr[1] } authors={ authors } loggedIn={ loggedIn } addToFinishedList={ addToFinishedList } myReviews={ myReviews } finished={ finished } deleteReview={ deleteReview } />)
  
  const readingListNotFinished = notRead.map(arr => <UserBookCard key={ arr[0].id } book={ arr[0] } review={ arr[1] } authors={ authors } loggedIn={ loggedIn } addToFinishedList={ addToFinishedList } myReviews={ myReviews } finished={ finished } deleteReview={ deleteReview } />)

  
  const toBeRead = () => {
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
        <div id="reading-list">
          <h1>Reading List:</h1>
        </div>
        <div>
          { toBeRead() }
        </div>
        <div id="reading-list">
          <h1>Finished books:</h1>
        </div>
        <div>
          { readingListFinished }
        </div>
        <div id="reading-list">
          <h1>My reviews:</h1>
        </div>
    </div>
  )
}

export default UserPage