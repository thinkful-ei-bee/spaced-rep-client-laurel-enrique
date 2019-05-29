import React from 'react';

export default function TotalScore(props){
    
    // console.log(this.context.value)

    // let numCorrect=props.correct
    // let numWrong= props.wrong
    // let total= numCorrect + numWrong
console.log(props.score);
    return(
        <div>
     
            Total correct answers: {props.score} 
       
        </div>
    )
}