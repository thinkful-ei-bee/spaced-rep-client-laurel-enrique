import React, { Component } from 'react'
import LangService from '../../services/lang-service'
import Word from '../../components/Word/Word'
import { Link} from 'react-router-dom';

class DashboardRoute extends Component {
  state={
    words:[],
    rightCount: [],
    wrongCount:[],
    totalCount:[],
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
      let correct= this.state.words.map(i =>{ return i.correct_count})
      let wrong= this.state.words.map(i=>{return i.incorrect_count})
      let numCorrect = correct.reduce((a,b) => {return a+b})
      let numWrong=wrong.reduce((a,b)=>{ return a+b})
      let total=`${numCorrect}/${numCorrect + numWrong}`
      this.setState({
        rightCount:correct,
        wrongCount:wrong,
        totalScore:total,
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
 
    return (
      <div> 
        LANGUAGE: {this.state.name}
        <div>TOTAL SCORE: 
      {this.state.totalScore}
        </div>
      <section>
    {this.renderWords(this.state.words)}       

      </section>
      <button><Link to={`/learn`}>Start Learning</Link></button>
      </div>
    );
  }
}

export default DashboardRoute
