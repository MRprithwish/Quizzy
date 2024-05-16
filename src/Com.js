
{/*import React, { useEffect,useState } from 'react';
import './Com.css';
function Com() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

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
    console.log(data);   
  }
useEffect(()=>{
  getUsers();
},[])


  const validateForm = (data) => {
    const errors = {};
    if (!data.email.trim()) {
      errors.email = 'Name is required';
    }
    if(!data.comment.trim() ){
      errors.comment = 'Empty Comment Box';
    }
    if(data.email.trim() && data.comment.trim()  ){
      errors.successful = 'Successful';
    }
    return errors;
  };

  return (
    <div >
        <br/>
        <br/>
        <br/>
      <form onSubmit={handleSubmit} className='si'>
          <br/>
          <h2 align="center"><b>Comment Box</b></h2>
          <hr width="80%" size="5" color="Black"/>
          <br/>
          <br/>
          <input type="text" name="email" value={formData.email} onChange={handleChange}  placeholder="Please enter your name" className='in'/>
          {errors.email && <div className="e">{errors.email}</div>}<br/>
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
    </div>
  );
}

export default Com;*/}


{/*import React, { useState } from 'react';

const K = () => {
  const questions = [
    {
      questionText: 'Who won the FIFA World Cup in 2018?',
      answerOptions: [
        { answerText: 'France', isCorrect: true },
        { answerText: 'Brazil', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
        { answerText: 'Argentina', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country has won the most Olympic gold medals in total?',
      answerOptions: [
        { answerText: 'United States', isCorrect: true },
        { answerText: 'China', isCorrect: false },
        { answerText: 'Russia', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
      ],
    },
    {
      questionText: 'Which sport does Cristiano Ronaldo play?',
      answerOptions: [
        { answerText: 'Basketball', isCorrect: false },
        { answerText: 'Tennis', isCorrect: false },
        { answerText: 'Football', isCorrect: true },
        { answerText: 'Baseball', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='quiz-container'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default K;*/}