import React, { Component } from 'react'
import LangService from '../../services/lang-service'
import Word from '../../components/Word/Word'
import { Link} from 'react-router-dom';
import TotalScore from '../../components/TotalScore/totalScore'
import LangContext from '../../contexts/LangContext';

class DashboardRoute extends Component {
  state={
    words:[],
    numCorrect: [],
    numWrong:[],
  
  }
  


  componentDidMount(){
    LangService.getUserLanguage()
    .then(res => {
      
      for(const [key,value] of Object.entries(res.language)){
        this.setState({
          [key]:value,
        })
      }
     
      for(let i=0; i<res.words.length; i++){
        this.setState({
          words: [...this.state.words, res.words[i]]
        })
      }
      let correct= this.state.words.map(i =>{ return i.correct_count}) //make an array of all the correct counts
      let wrong= this.state.words.map(i=>{return i.incorrect_count}) // make an array of all the incorrects
      
      let numCorrect = correct.reduce((a,b) => {return a+b})// get sums
      let numWrong=wrong.reduce((a,b)=>{ return a+b})
     
     
      
      this.setState({
        correctCount:numCorrect,
        wrongCount:numWrong,
        
      })
    })
  }

  renderWords=(words)=>{
    
     let word= words.map((item,index)=>{
     return <Word word={item}key={index}/>
    })
    return word
  }

 

  render(){ 

    const value = {       // haven't fully implemented context yet... just setting up template
      language:this.state.name,    
      words:this.state.words,               
      correctCount:this.state.correctCount,
      wrongCount:this.state.wrongCount,
    }

 
    return (

      <LangContext.Provider value={value}>

        <div> 
          LANGUAGE: {this.state.name}
          
          <TotalScore correct={this.state.correctCount} wrong={this.state.wrongCount}/>
          
          <section>

            {/* possibly turn below into its own component */}
            {this.renderWords(this.state.words)}       

          </section>

          <button><Link to={`/learn`}>Start Learning</Link></button>

        </div>
      </LangContext.Provider>
    );
  }
}

export default DashboardRoute
