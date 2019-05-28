import React from 'react';

export default function TotalScore(props){
    
    let totalScore=props.score
    return(
        <div>
            TOTAL SCORE:
        {totalScore}
        </div>
    )
}