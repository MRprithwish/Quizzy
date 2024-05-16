import React, { useState, useEffect } from 'react';
import './App.css';
import { createBoard } from './utils1/createBoard';
import Cell from './component3/Cell';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import './Com.css'

function G5() {
  const [board, setBoard] = useState([]);
  const [gamesToWin, setGamesToWin] = useState(3);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [finalTime, setFinalTime] = useState(null);

  const miliseconds = (timer / 10).toFixed(2);

  useEffect(() => {
    if (gameStarted) {
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 100);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gamesToWin === 0) {
      clearInterval(intervalId);
      setFinalTime(miliseconds);
    }
  }, [gamesToWin, intervalId, miliseconds]);

  const handleClick = (row, col) => {
    if (board[row][col].isHidden) {
      setGamesToWin(prevGamesToWin => prevGamesToWin - 1);
      setTimeout(() => {
        setBoard(createBoard());
      }, 500);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setBoard(createBoard());
    setGamesToWin(3);
    setTimer(0);
    setGameStarted(false);
    setFinalTime(null);
  };

  const handleStart = () => {
    setBoard(createBoard());
    setGameStarted(true);
    setFinalTime(null);
  };

  return (
    <div className="App">
      {!gameStarted && <button className="sstart-button" onClick={handleStart}><b>Start</b></button>}
      {gameStarted && gamesToWin > 0 && <p>Time: {miliseconds}</p>}
      {gamesToWin === 0 && (
        <>
          <p><b>Congratulations, your time was: {finalTime} seconds</b></p>
          <button className="rreset-button" onClick={handleReset}>Reset</button>
        </>
      )}
     
      {gamesToWin > 0 && (
        <p><b>Games to win: {gamesToWin}</b></p>
      )}
      <div>
        {gameStarted && gamesToWin > 0 && (
          <div>
            {board.map((row, rowIdx) => (
              <div key={rowIdx} className={"row"}>
                {row.map((letter, letterIdx) => (
                  <Cell key={letterIdx} handleClick={handleClick} {...letter} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <br/><br/>
      <Link to="/Fgame"><p className='plinkd1o'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
    </div>
  );
}

export default G5;
