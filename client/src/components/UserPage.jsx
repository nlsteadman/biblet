import React, { useState, useEffect } from 'react';
import pic from '../assets/pic.png';
import { useNavigate } from 'react-router-dom';
import UserBookCard from './UserBookCard';

const UserPage = ({ currentUser, reviews, books, loggedIn, authors }) => {
  const navigate = useNavigate();
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    if( loggedIn ) {
        setMyReviews(reviews.filter(myReviews => myReviews.user_id === currentUser.id));
    }
  }, [loggedIn, currentUser.id, reviews])

  const read = myReviews.map(review => review.book)
  
  const readingList = read.map(book => <UserBookCard key={ book.id } book={ book } authors={ authors } />)

  // const readingList = () => {
  //   if (read) {
  //     return read.map(book => <UserBookCard key={ book.id } review={ book } authors={ authors } />)
  //   }
  // }

  
  const toBeRead = () => {
    if (!readingList) {
      return (
        <div>
          <h3>Nothing to read? <button onClick={() => navigate('/books')}>Start adding books!</button></h3>
        </div>
      )
    }
    if (readingList) {
      return (
        <div>
          { readingList }
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
        <div id="reading-list">
          <h1>My reviews:</h1>
        </div>
    </div>
  )
}

export default UserPage