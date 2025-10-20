import { useState } from 'react';
import answers from './Answers.jsx';
import '../styles/EightBall.css';

function EightBall() {
  const answerQuestion = () => {
    let idx = Math.floor(Math.random() * answers.length);
    setColor(answers[idx].color);
    setMsg(answers[idx].msg);
  };

  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  return (
    <div className="Eightball-container">
      <button 
        className="Eightball-button" 
        style={{backgroundColor: color}}
        onClick={() => answerQuestion()}>
        <div className="leftTriangle"></div>
        <div className="rightTriangle"></div>
        <div className="Eightball-text">{msg}</div>
      </button>
    </div>
  )
}

export default EightBall;