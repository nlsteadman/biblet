import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { baseUrl, headers, getToken } from './Globals';


const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [books, setBooks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
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
  }, [loggedIn])



  return (
    <Router>
      <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser } />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup loginUser={ loginUser } loggedIn={ loggedIn } />} />
          <Route path="/login" element={<Login loginUser={ loginUser } loggedIn={ loggedIn } />} />
          <Route path="/books" element={<BookList loggedIn={ loggedIn } books={ books } />} />
          <Route path="/books/:id" element={<BookDetail loggedIn={ loggedIn } books={ books } />} />
      </Routes>
    </Router>
  );
}

export default App;
