import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, headers, getToken } from '../Globals';
import BookCard from './BookCard';

const Tag = ({ loggedIn }) => {
    const { id } = useParams()
    const [bookTags, setBookTags] = useState([]);
    const [tag, setTag] = useState({ books: [] });
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if(loggedIn) {
            fetch(baseUrl + '/booktags', {
                headers: {
                    ...headers,
                    ...getToken()
                }
            })
                .then(r => r.json())
                .then(bookTags => setBookTags(bookTags))
        }
    }, [loggedIn])

    useEffect(() => {
        if(loggedIn) {
            fetch(baseUrl + '/tags/' + id, {
                headers: {
                    ...headers,
                    ...getToken()
                }
            })
                .then(r => r.json())
                .then(tag => setTag(tag))
        }
    }, [loggedIn, id])

    const bookCard = tag.books.map(book => {
        return <BookCard
            key={ book.id }
            book={ book }
        />
    })

  return (
    <div>
        <h2>All titles { tag.content }</h2>
        { bookCard }
    </div>
  )
}

export default Tag