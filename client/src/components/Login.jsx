import React, { useState, useEffect } from 'react'
import { baseUrl, headers } from '../Globals';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginUser, loggedIn }) => {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            navigate('/books')
        }
    })

    const handleSubmit = e => {
        e.preventDefault();

        const params = {
            username,
            password
        }

        fetch(baseUrl + "/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(data => {
                loginUser(data.user);
                localStorage.setItem('jwt', data.token)
                navigate('/books');
            })
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) }/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={ password } onChange={ e => setPassword(e.target.value) }/>
            </div>

            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login