import React, { useState } from "react";
import { calculateWinner } from "./components2/helper";
import Board from "./components2/Board";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import './App.css'
import './Com.css'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXisNext(true);
  };

  const isDraw = !winner && history[stepNumber].every(square => square !== null);

  const renderMoves = () => {
    const moves = history.map((_step, move) => (
      <li key={move}>
        <button className="go-to-start-button" onClick={() => jumpTo(move)}></button>
      </li>
    ));
    return (
      <div className="moves-container">
        {moves.length > 1 && (
          <button className="go-to-start-button" onClick={() => jumpTo(0)}>
           
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="top-left-corner">
        {renderMoves()}
      </div>
    
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <br/><br/>
      <div className="info-wrapper">
      <Link to="/Fgame"><p className='plinke'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
        {winner ? <h3>Winner: {winner}</h3> : isDraw ? <h3>It's a draw!</h3> : <h3>Next Player: {xO}</h3>}
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>
      
    </>
  );
}

export default Game;
