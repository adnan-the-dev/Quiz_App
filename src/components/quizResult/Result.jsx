import React from 'react'
import '../quiz/quiz.css'
export default function Result({ score, total ,tryAgain}) {
    return (
        <>
            <div className='resul-box'>
                Your Score:{score} <br />
                Total Score:{total}
            <div className='btn-box'>
                <button className='button-18' onClick={tryAgain}>Play Again</button>
            </div>
            </div>

        </>
    )
}
