import Cards from './components1/Cards'
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
import './App.css';

function G2() {
  return (
    <div className="App">
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
    <div className='bgq1d'>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='signup1d'><br/><br/>
      <p className="heading-txt">Pexeso</p>
        <hr width="80%" size="5" color="black"/>
        <br/>
      <Cards />
      </div>
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
  );
}

export default G2;