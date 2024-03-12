import React, { useState } from 'react'
import './quiz.css'
import { questions } from '../quizData/Quiz'
import Result from '../quizResult/Result'
export default function Quiz() {
  const [currentQues, setCurrentQues] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(0)
  const [showRes, setShowRes] = useState(false)

  const changeQues = () => {
    checkScore();
    if (currentQues < questions.length - 1) {
      setCurrentQues(currentQues + 1)
      setSelected(false)
    } else {
      setShowRes(true)
    }
  }

  const checkScore = () => {
    if (selected === questions[currentQues].answer) {
      setScore(score + 1)
    }
  }

  const reset = ()=>{
    setCurrentQues(0)
    setScore(0)
    setSelected(0)
    setShowRes(false)
  }
  return (
    <>
      <div className='body'>
        <div className='box'>
          {
            showRes ? (<Result score={score} total={questions.length} tryAgain={reset} />) :
              (
                <>
                  <div className='title-box'>
                    <span>{currentQues + 1}.</span>
                    <h2>{questions[currentQues].question}</h2>
                  </div>

                  <div className='question-container'>
                    {
                      questions[currentQues].choices.map((item, i) => {
                        return (
                          <button
                            className={`${selected == i + 1 ? "select" : null}`}
                            key={i} onClick={() => setSelected(i + 1)}>{item}</button>
                        )
                      })
                    }
                  </div>
                  <div className='btn-box'>
                    <button className='button-18' onClick={changeQues}>Next</button>
                  </div>
                </>
              )}
        </div>
      </div>
    </>
  )
}
