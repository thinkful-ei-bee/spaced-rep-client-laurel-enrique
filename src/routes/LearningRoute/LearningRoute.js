import React, { Component } from 'react'
import LangContext from '../../contexts/LangContext'
import LangService from '../../services/lang-service'
class LearningRoute extends Component {
  constructor(){
    super();
    this.state ={
      guess_input:''
    }
  }
  static contextType = LangContext

  componentDidMount(){
    LangService.getHeadWord()
    .then(res => {
      for(const [key,value] of Object.entries(res)){
        this.setState({
          [key]:value,
        })
      }
      // console.log(this.state)
    })
  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state)
  }


  handleSubmit = (e) =>{
    e.preventDefault()
  console.log(this.state);
  //keeps track of word user just finished submitting
  this.setState({preWord: this.state.nextWord});
    LangService.postWord(this.state.guess_input)
    .then(res => {
      // console.log(res)
      for(const [key,value] of Object.entries(res)){
        this.setState({
          [key]:value,
        })
      }
     })
     
  }

  render() {
    // console.log(this.context);
    // console.log(this.props);
    console.log(this.state);

    //when there is an answer
    let message = null;
    //when the user has not entered anything
    let displayForm = null;

    if(this.state.isCorrect) {
      message = <><h2>You were correct! :D</h2></>;
      displayForm = <><button type='submit'>Try another word!</button></>
    } else {
      message = <><h2>Good try, but not quite right :(</h2>
      <p>{`The correct translation for ${this.state.preWord} was ${this.state.answer} and you chose ${this.state.guess_input}!`}</p></>;
      //if the user entered the wrong word
      displayForm = <><button type='submit'>Try another word!</button></>
    } 

    //for if there is no answer
    if (!this.state.answer) {
      message = <><h2>Translate the word:</h2> <span>{this.state.nextWord}</span></>;
      displayForm = <><form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor='learn-guess-input'>What's the translation for this word? </label>
        <input type='text' id='learn-guess-input' name='guess_input' onChange={this.handleChange.bind(this)} required />
        <button type='submit'>Submit your answer</button>
      </form></>
    }

    // console.log(message);

    return (
      <main className="score-form">
        <div className="DisplayFeedback">
        {message}
        </div>
        {displayForm}      
        <div className="DisplayScore">
          <p>{`Your total score is: ${this.state.totalScore}`}</p>
          {/* <p>{`You have answered this word correctly: ${this.state.wordCorrectCount} times.`}</p>
          <p>{`You have answered this word incorrectly: ${this.state.wordIncorrectCount} times.`}</p> */}
        </div>
      </main>
    );
  }
}

export default LearningRoute


