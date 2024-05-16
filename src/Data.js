import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Signup'

const Data = () => {
  // State to hold the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/Quizapp', {
        method: 'GET',
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Function to handle login attempt
  const handleLogin = () => {
    // Find user by username
    const user = users.find(user => user.username == username);
    if (user && user.confirmPassword == password) {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect username or password. Please try again.');
      // Clear input fields on unsuccessful login attempt
      setUsername('');
      setPassword('');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear input fields on logout
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div  >
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br />
          <button onClick={handleLogin} >Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
         
          <button onClick={handleLogout} >Logout</button>
        </div>
      )}
    </div>
  );
};

export default Data;
