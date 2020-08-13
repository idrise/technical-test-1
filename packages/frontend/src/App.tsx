import React from 'react'
import { QuestionFlowFetch } from './sections/questions/QuestionFlowFetch'

const App: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: '5em',
        margin: 'auto',
        width: '500px',
      }}
    >
      <QuestionFlowFetch />
    </div>
  )
}

export default App
