import React from 'react';
import pic from '../assets/pic.png';
import book from '../assets/book.png';
import list from '../assets/list.png';

const Home = () => {
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
        <div>
            <ul id="welcome">
                <li id="animate">
                    Welcome to Bib*let!!! 
                </li>
                <li>
                    A rad summer reading list for cool kids who love to read!
                </li>
                <li>
                    Find your next great read <img src={ book } alt="book" height="40px" width="40px" />,
                </li>
                <li>
                    add it to your reading list <img src={ list } alt="list" height="40px" width="40px" />,
                </li>
                <li>
                    and check it off when you're done! ✅
                </li>
                <li>
                    Need suggestions for what to read? We have those!
                </li>
            </ul>
            <br/>
            <br/>
        </div>
    </div>
  )
}

export default Home