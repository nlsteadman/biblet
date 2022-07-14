import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';

const Tag = ({ loggedIn, books, tags }) => {
    const { id } = useParams()
    const [tag, setTag] = useState({});
    
    useEffect(() => {
        if (loggedIn) {
             setTag(tags.find(tag => tag.id.toString() === id));
        }
    }, [loggedIn, id, tags])

    // const tagBooks = books.filter(book => book.tag_id === id);
    console.log(tag)
    // const bookCards = tag.books.map(book => <BookCard key={ book.id } book={ book } />)

    
  return (
    <div>
        <h2>All titles { tag.content }</h2>
        {/* { bookCards } */}
    </div>
  )
}

export default Tag