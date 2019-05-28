import React from 'react';

export default function Word(props){

    console.log(props.word)

    return(
        <div>
            {props.word.original}<br/>
            correct: {props.word.correct_count}
            wrong: {props.word.incorrect_count}
        </div>
    )
}