import React from 'react';
import pic from '../assets/pic.png';
import book from '../assets/book.png';
import list from '../assets/list.png';
import BookCard from './BookCard';

const Home = ({ books }) => {

    const bookCards = books.map(book => <BookCard key={ book.id } book={ book } />)

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
            <h3 id="animate">
                Welcome to Bib*let!!! 
            </h3>
            <h4>
                * A rad summer reading list for cool kids who love to read! *
            </h4>
            <ul id="welcome">
                <li>
                    - Find your next great read <img src={ book } alt="book" height="40px" width="40px" />,
                </li>
                <li>
                    - add it to your reading list <img src={ list } alt="list" height="40px" width="40px" />,
                </li>
                <li>
                    - and check it off when you're done! ✅
                </li>
                <h4>
                    Need suggestions for what to read? We have those!
                </h4>
            </ul>
            <br/>
            <br/>
            <div>
                { bookCards }
            </div>
        </div>
    </div>
  )
}

export default Home