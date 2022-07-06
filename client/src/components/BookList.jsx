import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from './BookCard';

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
        <h1>Bib*let</h1>
        <h2>Books</h2>
        { bookCards }
    </div>
  )
}

export default BookList