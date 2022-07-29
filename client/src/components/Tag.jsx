import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TagBookCard from './TagBookCard';

const Tag = ({ loggedIn, tags, authors }) => {
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
            return tag.books.map(book => <TagBookCard key={ book.id } book={ book } authors={ authors} />)
        }
    }

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