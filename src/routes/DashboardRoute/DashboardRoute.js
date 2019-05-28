import React, { Component } from 'react'
import LangService from '../../services/lang-service'
import Word from '../../components/Word/Word'
import { Link} from 'react-router-dom';

class DashboardRoute extends Component {
  state={
    words:[],
    rightCount: [],
    wrongCount:[],
  }
  // The app gets my language and words progress from the server
  // - I'm shown my language
  // - I'm shown the words to learn for the language
  // - I'm shown my count for correct and incorrect responses for each word
  // - I'm given a button/link to start learning
  // - I'm shown the total score for guessing words correctly

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

    })
  }

  renderWords=(words)=>{
    
     let word= words.map((item,index)=>{
     return <Word word={item}key={index}/>
    })
    return word
  }

  handleLearningClick=()=>{

  }

  // calcTotalScore=(words)=>{
    
  //   let right=[];
  //   let wrong=[];
    // for(let i=0; i<words.length; i++){
    //   if(words[i].correct_count !== null){
    //     right.push(words[i].correct_count) 
    //   if(words[i].incorrect_count !== null){
    //      wrong.push( words[i].incorrect_count)
  
    //     }

//       }
   
    
//     let rightCount = right.reduce((a,b) => a+b)
//     let wrongCount = wrong.reduce((a,b) => a+b)

//     this.setState({
//       rightCount: rightCount,
//       wrongCount:wrongCount,
//     })

//     return `${rightCount} / ${wrongCount}`
//   }
// }



  render(){
  
 
    return (
      <div> 
        LANGUAGE: {this.state.name}
        {/* <div>TOTAL SCORE: {this.calcTotalScore(this.state.words)}</div> */}
      <section>
    {this.renderWords(this.state.words)}       

      </section>
      <button><Link to={`/learn`}>Start Learning</Link></button>
      </div>
    );
  }
}

export default DashboardRoute
