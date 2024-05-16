
import './App.css';
import { Link } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const[users,setUsers]=useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(errors);
    }

    const response = await fetch('http://localhost:8000/Quizapp',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    console.log(data);

  };

  const getUsers=async()=>{
    const response = await fetch('http://localhost:8000/Quizapp',{
      method:'GET',
    })
    const data=await response.json();
    setUsers(data);   
  }
  useEffect(()=>{
    getUsers();
  },[])


  const validateForm = (data) => {
    const errors = {};
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if(data.email.trim() && data.username.trim() && data.password.trim() && data.password == data.confirmPassword ){
      errors.successful = 'Signup process Successful';
    }
    return errors;
  };

  return (
    
    <div align="center" class="bg2">
    
        <br/>
        <br/>
        <br/>
      <form onSubmit={handleSubmit} className='signup'>
          <br/>
          <h1 align="center"  className='t'>Signup Form</h1>
          <hr width="80%" size="5" color="black"/>
          <br/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className='input' placeholder="Enter email"/>
          {errors.email && <div className="error">{errors.email}</div>}
          <input type="text" name="username" value={formData.username} onChange={handleChange} className='input' placeholder="Enter Username"/>
          {errors.username && <div className="error">{errors.username}</div>}
          <input type="password" name="password" value={formData.password} onChange={handleChange} className='input' placeholder="Enter Password"/>
          {errors.password && <div className="error">{errors.password}</div>}
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='input' placeholder="Confirm Password"/>
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          {errors.successful && <div className="error1">{errors.successful}</div>}
          <br/>
        <div>
          <button type="submit" className='submit'><b>Signup</b></button>
          <Link to="/"><p className='plink'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
          <br/>
        </div>
      </form>
    </div>
  );
}

export default Signup;