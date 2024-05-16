import React from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import './App.css';

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    <Link to="/Qgame"><p className='plink2'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
    </>
  )
}

export default QuizResult