import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/pic.png';
import TagCard from './TagCard';
import { baseUrl, headers, getToken } from '../Globals';
import ReviewCard from './ReviewCard';


const BookDetail = ({ loggedIn, books, tags, setTag }) => {
    const [book, setBook] = useState({ tags: [] });
    const { id } = useParams();
    const navigate = useNavigate();
    console.log("I'm at the top")

    useEffect(() => {
        if( !loggedIn ) {
            navigate('/login');
        }
    }, [loggedIn, navigate])
    

    useEffect(() => {
        if( loggedIn ) {
            setBook(books.find(book => book.id.toString() === id));
        }
        console.log("I'm going to set the book")
        // if(loggedIn) {
        //     fetch(baseUrl + '/books/' + id, {
        //         headers: {
        //             ...headers,
        //             ...getToken()
        //           }
        //     })
        //         .then(r => r.json())
        //         .then(book => setBook(book))
        // }
        
    }, [loggedIn])

    const authorDetails = () => {
        if (book.author) {
            return ( 
                <div>
                    <p>{ book.author.name }</p>
                    <p>{ book.author.statement }</p>
                    <img src={ book.author.image_url }/>
                </div>
            )
        } 
    }

    const tagCards = book.tags.map(tag => <TagCard key={ tag.id } tag={ tag } />)
    console.log(book)
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
                { tagCards }
            </div>
        </div>
        <div id="detail-info">
            <div>
                <p>{ book.description }</p>
                <h3 id="heading">About the Author: </h3>
                { authorDetails() }
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