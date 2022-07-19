import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tag from "./components/Tag";
import { baseUrl, headers, getToken } from './Globals';
import UserPage from "./components/UserPage";


const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [books, setBooks] = useState([]);
  const [tags, setTags] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [users, setUsers] = useState([]);
  

  const loginUser = user => {
    if (user) {
      setCurrentUser(user);
      setLoggedIn(true);
    } else {
      setCurrentUser(null);
      setLoggedIn(false);
      alert("This user doesn't exist");
    }
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt');
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(token && !loggedIn) {
      fetch(baseUrl + '/get-current-user', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(r => r.json())
        .then(user => loginUser(user))
    }

    if(loggedIn) {
      fetch(baseUrl + '/books', {
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setBooks(data))
    }

    if(loggedIn) {
      fetch(baseUrl + '/tags', {
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setTags(data))
    }

    if(loggedIn) {
      fetch(baseUrl + '/reviews', {
        headers: {
            ...headers,
            ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setReviews(data))
    }
  

    if(loggedIn) {
      fetch(baseUrl + '/authors', {
        headers: {
            ...headers,
            ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setAuthors(data))
    }

    if(loggedIn) {
      fetch(baseUrl + '/users', {
        headers: {
            ...headers,
            ...getToken()
        }
      })
        .then(r => r.json())
        .then(data => setUsers(data))
    }


  }, [loggedIn])

  const addToReadingList = review => {
    setReviews([...reviews, review]);
  }

  const addToFinishedList = review => {
    setReviews(reviews.map(r => r.id === review.id ? review : r))
  }

  const deleteReview = review => {
    setReviews(reviews.filter(r => r.id !== review.id))
  }

  return (
    <Router>
      <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser } />
      <Routes>
          <Route path="/" element={<Home books={ books }/>} />
          <Route path="/signup" element={<Signup loginUser={ loginUser } loggedIn={ loggedIn } />} />
          <Route path="/login" element={<Login loginUser={ loginUser } loggedIn={ loggedIn } />} />
          <Route path="/books" element={<BookList loggedIn={ loggedIn } books={ books } />} />
          <Route path="/books/:id" element={<BookDetail loggedIn={ loggedIn } books={ books } tags={ tags } setTags={ setTags } reviews={ reviews } setReviews={ setReviews } currentUser={ currentUser } addToReadingList={ addToReadingList }/>} />
          <Route path="/tags/:id" element={<Tag loggedIn={ loggedIn } tags={ tags } authors={ authors } />} />
          <Route path="/users/:id" element={<UserPage loggedIn={ loggedIn } books={ books } currentUser={ currentUser } reviews={ reviews } authors={ authors } addToFinishedList={ addToFinishedList } deleteReview={ deleteReview }/>} />
      </Routes>
    </Router>
  );
}

export default App;
