import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/pic.png';


const BookDetail = ({ books, loggedIn }) => {
    const [book, setBook] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if( !loggedIn ) {
            navigate('/login');
        }
    }, [loggedIn, navigate])

    useEffect(() => {
        const bb = books.find(b => b.id.toString() === id);
        setBook(bb);
    }, [id, books])

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
        <h3>{ book.title }</h3>
        <div id="detail-card">
            <div id="detail-book-img">
                <img src={ book.image_url } alt="a book cover" height="450" width="300"/>
            </div>
            <div id="tags">
                <h3 id="heading">Tags: </h3>
                {/* <p>{ book.tag.first }</p> */}
            </div>
        </div>
        <div id="detail-info">
            <div>
                <p>{ book.description }</p>
                <h3 id="heading">About the Author: </h3>
                {/* <p>{ book.author.name }</p>
                <p>{ book.author.statement }</p>
                <p>{ book.author.image_url }</p> */}
            </div>
            <div>
                <h3 id="heading">Reviews: </h3>
                {/* <p>{ book.review.first }</p> */}
            </div>
        </div>
    </div>
  )
}

export default BookDetail