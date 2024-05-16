
import './App.css';
import './Com.css';
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import React, { useEffect, useState } from 'react';
export default function Create() {

  const [formData, setFormData] = useState({
    question: '',
     option1: '',
     option2: '',
     option3: '',
     option4: '',
     answer:'',
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
 
     const response = await fetch('http://localhost:8001/Quizz',{
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
     const response = await fetch('http://localhost:8001/Quizz',{
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
  if (!data.question.trim()) {
    errors.question = 'Empty';
  }
  if(!data.option1.trim() ){
    errors.option1 = 'Empty';
  }
  if(!data.option2.trim() ){
    errors.option2 = 'Empty';
  }
  if(!data.option3.trim() ){
    errors.option3 = 'Empty';
  }
  if(!data.option4.trim() ){
    errors.option4 = 'Empty';
  }
  if(!data.answer.trim() ){
    errors.answer = 'Empty';
  }
  if(data.question.trim() && data.option1.trim()  && data.option2.trim() && data.option3.trim()  && data.option4.trim() && data.answer.trim()){
    errors.successful = 'Submit';
  }
  return errors;
};
 

    const [answer, setanswer] = useState('');
   
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    // Function to handle login attempt
    const handleLogin = () => {
      // Find user by username
      const user = users.find(user => user.answer == answer);
      if (user && user.answer == answer) {
        setIsLoggedIn(true);
      } 
      else {
        alert('Your Option Is Incorrect!!!');
        // Clear input fields on unsuccessful login attempt
        setanswer('');
      }

      
    };
  
    // Function to handle logout
    const handleLogout = () => {
      setIsLoggedIn(false);
      // Clear input fields on logout
      setanswer('');
    };
  

  return (
    <div>
      <>
      <div><a href="">
    <ul className='ulz'>
      <li className="liz"><Link to="/Base" className="link">Home</Link></li>
      <li className="liz"><Link to="/Create" className="link">Create</Link></li>
      <li className="liz">
            <li className="lizz" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category<IoMdArrowDropdownCircle /></li>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className='dropdown-item' ><Link to="/Fgame" className="link1">Fun Game</Link></li>
              <li className='dropdown-item' ><Link to="/Qgame" className="link1">Quiz Game</Link></li>
            </div>
          </li> 
      <li className="liz"><Link to="/About" className="link">About</Link></li>
      <li><Link to="/Login" className="link1"><button className='but'><b>Logout</b></button></Link></li>
    </ul></a>
    </div>
    <div className='bg4'>
    <br/>
    <br/>
    <br/>
    <form onSubmit={handleSubmit} className='si'>
          <br/>
          <h2 align="center"><b>Quizz Factory</b></h2>
          <hr width="100%" size="5" color="black"/>
          <br/>
          <br/>
          <input type="text" name="question" value={formData.question} onChange={handleChange}  placeholder="Please enter question" className='in'/>
          {errors.question && <div className="e">{errors.question}</div>}<br/>
          <input type="text" name="option1" form="usrform"  className='in' value={formData.option1} onChange={handleChange} placeholder="option 1"/>
          {errors.option1 && <div className="e">{errors.option1}</div>}<br/>
          <input type="text" name="option2" form="usrform"  className='in' value={formData.option2} onChange={handleChange} placeholder="option 2"/>
          {errors.option2 && <div className="e">{errors.option2}</div>}<br/>
          <input type="text" name="option3" form="usrform"  className='in' value={formData.option3} onChange={handleChange} placeholder="option 3"/>
          {errors.option3 && <div className="e">{errors.option3}</div>}<br/>
          <input type="text" name="option4" form="usrform"  className='in' value={formData.option4} onChange={handleChange} placeholder="option 4"/>
          {errors.option4 && <div className="e">{errors.option4}</div>}<br/>
          <input type="text" name="answer" form="usrform"  className='in' value={formData.answer} onChange={handleChange} placeholder="answer"/>
          {errors.answer && <div className="e">{errors.answer}</div>}
          
          {errors.successful && <div className="e1">{errors.successful}</div>}
          <br/>
        <div>
          <button type="submit" className='s'><b>Submit</b></button>
          <br/>
        </div>
      </form>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="myBoxx">
    <br/>
    <br/>
    <br/>
      <ul>
          {users.map(user=><li>{user.question}<br/>{user.option1}<br/>{user.option2}<br/>{user.option3}<br/>{user.option4}<br/>{!isLoggedIn ? (
      <div>
          <br/>
        <form className=''>
          <input
            type="text" name="answer"
            placeholder="answer" 
            value={answer}
            onChange={(e) => setanswer(e.target.value)} className='fx'/>
            <br/>
          <br/>
          <div>
          <button type="submit" className='bx' onClick={handleLogin}><b>Submit</b></button>
          </div>
          <br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </form>  
      </div>
    ) : (
      <>Correct <br/><br/><br/><br/><br/><br/><br/><br/><br/></>
      
      )}<br/></li>)} 
      
      </ul>
      </div>
    <br/>
    <br/>
    <br/> 
    </div>
    <div>
      <ul className='ul'>
        <li className="li">Get connected with us on social networks:</li>
        <li className="li2"><FaGithub /></li>
        <li className="li1"><FaLinkedin /></li>
        <li className="li1"><FaGoogle /></li>
        <li className="li1"><MdEmail/></li>
      </ul>
      </div>
      <div className='footer'>
          <table className='tab'>
          <br/><br/>
            <tr >
              <th className='tr'>.................</th>
              <th className='th'>CONCLUSION</th>
              <th className='th'>COMPONENTS</th>
              <th className='th'>USEFUL LINKS</th>
              <th className='th'>CONTACT</th>
            </tr>
            <br/>
            <tr>
              <td className='tr'>............</td>
              <td>Quiz app should provide a satisfying wrap-up </td>
              <td>Mongo DB</td>
              <td>Address</td>
              <td><b><FaHouseChimney /></b>Sukna,West Bengal 734009</td>
            </tr>
            <br/>
            <tr>
            <td className='tr'>............</td>
              <td>to the user's quiz-taking experience while also </td>
              <td>Express</td>
              <td>Email</td>
              <td><b><MdMarkEmailUnread /></b>sit2024@gmail.com</td>
            </tr>
            <br/>
            <tr>
            <td className='tr'>............</td>
              <td>encouraging further engagement with the app</td>
              <td>React JS</td>
              <td>Contact-US</td>
              <td><b><FaPhoneAlt /></b>+91 012 345 6789</td>
            </tr>
            <br/>
            <tr>
            <td className='tr'>............</td>
              <td>or related content.</td>
              <td>Node JS</td>
              <td>Help</td>
              <td><b><FaHandsHelping /></b>+91 012 345 6789</td>
            </tr>
          </table>
          <br/><br/>
      </div>
      <div className='footer1'>
      © 2024 Copyright:TECHNO_VISION.SIT
      </div>
      </>
    </div>
  )
}
