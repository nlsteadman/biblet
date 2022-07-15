import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ loggedIn, logoutUser, currentUser }) => {

    const loggedOutLinks = () => {
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        )
    }

    const handleLogout = e => {
        e.preventDefault();
        logoutUser();
    }

    const loggedInLinks = () => {
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/users/:id">My page</Link></li>
                    <li><a href=" " onClick={ handleLogout }>Logout</a></li>
                    <li id="currentUser">Welcome back, { currentUser.username }!</li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            { loggedIn ? loggedInLinks() : loggedOutLinks() }
        </div>
    )
}

export default Navbar