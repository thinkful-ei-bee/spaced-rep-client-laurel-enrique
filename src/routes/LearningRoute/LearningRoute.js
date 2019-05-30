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
  
    LangService.postWord(this.state.guess_input)
    .then(res => {
      console.log(res)
      // for(const [key,value] of Object.entries(res)){
      //   this.setState({
      //     [key]:value,
      //   })
      // }
      // console.log(this.state)
    })
     
  }

  render() {
    return (
      <main>
        <h2>Translate the word:</h2><span>{this.state.nextWord}</span>
        <p>Your total score is: {this.state.totalScore}</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' id='learn-guess-input' name='guess_input'  onChange={this.handleChange.bind(this)} required/>
          <button type='submit'>Submit your answer</button>
        </form>
        <p>{`You have answered this word correctly ${this.state.wordCorrectCount} times.`}</p>
        <p>{`You have answered this word incorrectly ${this.state.wordIncorrectCount} times.`}</p>
      </main>
    );
  }
}

export default LearningRoute


