import React, { useState } from 'react'
import { QuizData } from './QuizData'
import QuizResult from './QuizResult';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import './App.css';

function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">Computer</p>
        <hr width="100%" size="5" color="black"/>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <br/>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption === i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            <Link to="/Qgame"><p className='plink1'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
            </>)}
        </div>
    </div>
  )
}

export default Quiz