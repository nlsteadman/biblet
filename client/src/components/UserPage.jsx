import React from 'react';
import pic from '../assets/pic.png';
import { useNavigate } from 'react-router-dom';


const UserPage = ({ users, currentUser }) => {
  const navigate = useNavigate();

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
          <h3>Nothing to read? <button onClick={() => navigate('/books')}>Start adding books!</button></h3>
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