import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from './BookCard';
import pic from '../assets/pic.png';


const BookList = ({ loggedIn, books }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if( !loggedIn ) {
            navigate('/login');
        }
    }, [loggedIn, navigate])

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
        <h2>Books</h2>
        { bookCards }
    </div>
  )
}

export default BookList