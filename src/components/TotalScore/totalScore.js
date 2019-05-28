import React from 'react';

export default function TotalScore(props){
    
    let numCorrect=props.correct
    let numWrong= props.wrong
    let total= numCorrect + numWrong
    return(
        <div>
            TOTAL SCORE:
        {numCorrect} / {total}
        </div>
    )
}