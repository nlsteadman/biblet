import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from './BookCard';

const BookList = ({ loggedIn, books, authors }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if( !loggedIn ) {
            navigate('/login');
        }
    }, [loggedIn])

    const bookCards = books.map(book => <BookCard key={ book.id } book={ book } />)
    
  return (
    <div>
        <h1>Books</h1>
        { bookCards }
    </div>
  )
}

export default BookList