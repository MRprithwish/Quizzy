import React from 'react'
import './App.css';
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
export default function About() {
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
    <br/>
    <div className='bg3'>
    <div className="about">
    <h1><b>Welcome to Learn_Q,</b></h1> 
    <p><b>the ultimate destination for trivia enthusiasts and knowledge seekers!</b></p>
    <h4 className="p1"><b>Our Mission:</b></h4>
    <p>At Learn_Q, our mission is to provide a fun and engaging platform that challenges users  
    to expand their knowledge, sharpen their minds, and connect with a global community of like-minded individuals. We believe that learning should
    be enjoyable and accessible to everyone, and that's why we've created a diverse range of quizzes to game to a wide variety of interests and
    expertise levels.</p>
    <h4 className="p1"><b>Features:</b></h4>
    <ul>
      <li><b>Vast Quiz Library:</b> Explore thousands of quizzes spanning numerous categories, including history, science, sports and more.</li>
      <li><b>Customizable Experience: </b>Tailor your quiz experience by selecting your favorite topics, difficulty levels, and quiz formats.</li>
      <li><b>Compete and Connect: </b>Challenge friends, family, or fellow QuizApp users in head-to-head matches, or join multiplayer quizzes to test your knowledge against a diverse community of players from around the world.</li>
      <li><b>Earn Rewards:</b> Unlock achievements, earn badges, and climb the leaderboard as you progress through quizzes and showcase your expertise.</li>
      <li><b>Continuous Updates:</b> We're constantly adding new quizzes and games, features, and improvements to ensure that your Learn_Q experience remains fresh, exciting, and up-to-date.</li>
    </ul>
    <h4><b>Why Choose Learn_Q?</b></h4>
    <ul>
      <li><b>Educational: </b>Learn fascinating facts, historical tidbits, and intriguing trivia while having fun.</li>
      <li><b>Entertaining:</b> Whether you're a casual player looking to pass the time or a dedicated trivia buff seeking a challenge, there's something for everyone on Learn_Q.</li>
      <li><b>Social: </b>Engage with friends, compete against rivals, and connect with a vibrant community of trivia enthusiasts who share your passion for knowledge.</li>
    </ul>
    <h4 className="p1"><b>Get Started Today:</b></h4>
    <p>Ready to put your knowledge to the test? Enjoy Learn_Q now and embark on an exhilarating journey of discovery, learning, and fun! Whether you're a trivia novice or a seasoned expert, there's always something new to explore and conquer on Learn_Q.</p>
    <h4 className="p1"><b>Join Our Community:</b></h4>
    <p>Follow us on social media and join our growing community of Learn_Q enthusiasts for updates, competitions, and exclusive content. Let's unleash our knowledge together!</p>
    <br />
    <hr width="100%" size="4" color="black"/>
    <p><b>This "About" section provides an overview of Learn_Q's mission, features, and benefits, inviting users to join the community and start their trivia adventure.</b></p>
    </div>
    </div>
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
              <td><b><FaPhoneAlt /></b>+91 012 344 6789</td>
            </tr>
            <br/>
            <tr>
            <td className='tr'>............</td>
              <td>or related content.</td>
              <td>Node JS</td>
              <td>Help</td>
              <td><b><FaHandsHelping /></b>+91 012 344 6789</td>
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
