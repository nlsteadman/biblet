import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, headers, getToken } from '../Globals';
import BookCard from './BookCard';

const Tag = ({ loggedIn }) => {
    const { id } = useParams()
    const [bookTags, setBookTags] = useState([]);
    const [tag, setTag] = useState({ books: [] });

    useEffect(() => {
        if(loggedIn) {
            fetch(baseUrl + '/booktags', {
                headers: {
                    ...headers,
                    ...getToken()
                }
            })
                .then(r => r.json())
                .then(data => setBookTags(data))
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
                .then(data => setTag(data))
        }
    }, [loggedIn, id])

    const bookCard = tag.books.map(book => {
        return <BookCard
            // key={ book.id }
        />
    })

  return (
    <div>
        <h2>All titles { Tag.content }</h2>
        { bookCard }
    </div>
  )
}

export default Tag