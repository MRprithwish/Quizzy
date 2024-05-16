import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import './Com.css';
import './Signup';
import Base from './Base';
import Out from './Out';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

  const Login = () => {
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
      } 
      else {
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
      <>
      {!isLoggedIn ? (
      <div align="center" class="bg2">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <form className='login'>
          <br/>
          <h1 align="center" className='t'>Login Form</h1>
          <hr width="80%" size="5" color="black"/>
          <br/>
          <input
            type="text"
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} className='input'/>
            <br/>
          <input
            type="password"
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} className='input'/>
          <br/>
          <br/>
          <div>
          <button type="submit" className='submit' onClick={handleLogin}><b>Login</b></button>
          <Link to="/"><p className='plink'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
          </div>
          <br/>
          <br/>
        </form>  
      </div>
    ) : (
      <div>
      <Out/>
      <br/>
      <button type="submit" className='b1' onClick={handleLogout}><b>Logout</b></button>
        </div>
      )}
      </>
    </div>
  )
}

export default Login;
