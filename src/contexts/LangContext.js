import React from 'react'

const LangContext = React.createContext({
    language:'',
    words:[],
    numCorrect:[],
    numWrong:[],
  })

  export default LangContext