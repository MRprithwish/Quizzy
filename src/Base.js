
import { Slide } from 'react-slideshow-image';
import './App.css';
import './styles.css'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import './Com.css';
import React, { useEffect,useState } from 'react';
import './Signup';
import './Login';




const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}
const slideImages = [
  {
    url: './Slider1.jpg',
    
  },
  {
    url: './slider4.jpg',
    
  },
  {
    url: './slider2.jpg',
    
  },
  {
    url: './slider3.jpg',
    
  },
];

export default function Base() {


  const [formData, setFormData] = useState({
   phone: '',
    comment: '',
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

    const response = await fetch('http://localhost:8002/Quizcom',{
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
    const response = await fetch('http://localhost:8002/Quizcom',{
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
    if (!data.phone.trim()) {
      errors.phone = 'Name is required';
    }
    if(!data.comment.trim() ){
      errors.comment = 'Empty Comment Box';
    }
    if(data.phone.trim() && data.comment.trim()  ){
      errors.successful = 'Successful';
    }
    return errors;
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
      <li ><Link to="/Login" className="link1"><button className='but'><b>Logout</b></button></Link></li>
    </ul></a>
    </div>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}/>
            </div>
          ))} 
        </Slide>
      </div>
      <div className="bg1"><br/><br/><br/> <div >
        <br/>
        <br/>
        <br/>
      <form onSubmit={handleSubmit} className='si'>
          <br/>
          <h2 align="center"><b>Comment Box</b></h2>
          <hr width="100%" size="5" color="black"/>
          <br/>
          <br/>
          <input type="text" name="phone" value={formData.email} onChange={handleChange}  placeholder="Please enter your name" className='in'/>
          {errors.phone && <div className="e">{errors.phone}</div>}<br/>
          <textarea type="text" name="comment" form="usrform"  className='in' value={formData.comment} onChange={handleChange} placeholder="Enter comment here..."/>
          {errors.comment && <div className="e">{errors.comment}</div>}
          {errors.successful && <div className="e1">{errors.successful}</div>}
          <br/>
        <div>
          <button type="submit" className='s'><b>Submit</b></button>
          <br/>
        </div>
      </form>
      <br/>
    </div></div>
      <br/>
      <div className='form4'>
      <h4>Comments</h4>
      <hr width="100%" size="5" color="black"/>
      <div className="myBox">
          {users.map(user=><li >{user.phone}-<br/>{user.comment}</li>)} 
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
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
