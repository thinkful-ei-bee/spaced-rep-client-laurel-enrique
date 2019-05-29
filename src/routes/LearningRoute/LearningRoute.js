import React, { Component } from 'react'
import LangContext from '../../contexts/LangContext'
import LangService from '../../services/lang-service'
class LearningRoute extends Component {
  constructor(){
    super();
    this.state ={

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
      console.log(this.state)
    })
  }








  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    //post method goes here
  }

  render() {
    return (
      <main>
        <h2>Translate the word:</h2><span>{this.state.nextWord}</span>
        <p>Your total score is: {this.state.totalScore}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor= 'learn-guess-input'>What's the translation for this word?</label>
          <input className='learn-guess-input' type='text'  required onChange={this.handleChange.bind(this)}/>
          <button type='submit'>Submit your answer</button>
        </form>
        <p>You have answered this word correctly {this.state.wordCorrectCount} times</p>
        <p>You have answered this word incorrectly {this.state.wordIncorrectCount} times</p>
      </main>
    );
  }
}

export default LearningRoute


// Write any appropriate components for the learning page to fit your wire-frame.
// Write code for the request to the GET /api/language/head endpoint where appropriate.
// Write any appropriate React context(s) to store details of the response from the API request.
// Display the next word the user must submit their answer for.
// Display the current total score for the user.
// Display the form to submit the next answer. The form will need:
// an input#learn-guess-input,
// a label for the input,
// and a button[type=submit]. You don't need to implement this button's event handler yet, that's the next user story.
// Display the correct and incorrect count for the word.
// Style the page to fit your wire-frame.
// Ensure the page passes accessibility checks.