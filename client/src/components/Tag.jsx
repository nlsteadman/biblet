import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TagBookCard from './BookCard';

const Tag = ({ loggedIn, books, tags }) => {
    const { id } = useParams()
    const [tag, setTag] = useState({ books: [] });

    useEffect(() => {
        if (loggedIn) {
            setTag(tags.find(tag => tag.id.toString() === id));
        }
    }, [loggedIn, tags, id])
    
    const tagInfo = () => {
        if (tag) {
            return (
                <div>
                    <h2>All { tag.content } books</h2>
                </div>
            )
        }
    }

    const bookCards = () => {
        if (tag) {
            tag.books.map(book => <TagBookCard key={ book.id } book={ book } />)
        }
    }
    // const bookCards = tag.books.map(book => <TagBookCard key={ book.id } book={ book } />)

    console.log(tag)
  return (
    <div>
        <div>
            { tagInfo() }
        </div>
        <div>
            { bookCards() }
        </div>
    </div>
  )
}

export default Tag