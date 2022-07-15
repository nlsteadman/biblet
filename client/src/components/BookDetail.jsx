import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/pic.png';
import TagCard from './TagCard';
import ReviewCard from './ReviewCard';


const BookDetail = ({ loggedIn, books, tags, setTag, reviews, setReviews }) => {
    const [book, setBook] = useState({ tags: [], reviews: [] });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if( !loggedIn ) {
            navigate('/login');
        }
    }, [loggedIn, navigate])


    useEffect(() => {
        if( loggedIn ) {
            setBook(books.find(book => book.id.toString() === id));
        }
    }, [loggedIn])

    const bookReviews = reviews.filter(review => review.book_id.toString() === id);

    const authorDetails = () => {
        if (book.author) {
            return ( 
                <div id="author-div">
                    <div id="author-pic">
                        <img src={ book.author.image_url } alt={'author image'} height="200"/>
                    </div>
                    <div id="author-info">
                        <p>Name: { book.author.name }</p>
                        <p>Statement: { book.author.statement }</p>
                    </div>
                </div>
            )
        } 
    }

    const tagCards = book.tags.map(tag => <TagCard key={ tag.id } tag={ tag } />)

    const reviewCards = bookReviews.map(review => <ReviewCard key={ review.id } review={ review } />)

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
                <img src={ book.image_url } alt="a book cover" height="550" width="400"/>
            </div>
            <div id="tags">
                <h3 id="heading">Tags: </h3>
                { tagCards }
            </div>
        </div>
        <div id="detail-info">
            <div id="book-description">
                <p>{ book.description }</p>
            </div>
            <div>
                <h3 id="heading">About the Author: </h3>
                { authorDetails() }
            </div>
            <div>
                <h3 id="heading">Reviews: </h3>
                <div id="review-cards">
                { reviewCards }
                </div>
                <button>Leave a review!</button>
            </div>
        </div>
    </div>
  )
}

export default BookDetail