import React, { useReducer } from 'react'
import { Question, QuestionScreen } from './screens/QuestionScreen'
import {
  questionFlowReducer,
  QuestionFlowReducerState,
} from './reducer/question-flow-reducer'
import { NameScreen } from './screens/NameScreen'
import { CompletionScreen } from './screens/CompletionScreen'

interface QuestionFlowProps {
  data: Question[]
}

export function QuestionFlow(props: QuestionFlowProps) {
  const { data } = props
  const [questionFlowState, dispatch] = useReducer(
    questionFlowReducer,
    {} as QuestionFlowReducerState,
  )

  const nextQuestion = data.find((question: Question) => {
    if (!questionFlowState.answers) {
      return true
    }
    return !Object.keys(questionFlowState.answers).includes(question.question)
  })

  const showNameScreen = questionFlowState.name === undefined
  const showQuestionScreen =
    questionFlowState.name !== undefined && nextQuestion
  const showResultScreen =
    nextQuestion === undefined && questionFlowState.name !== undefined

  return (
    <>
      {showNameScreen && <NameScreen dispatch={dispatch} />}

      {showQuestionScreen && nextQuestion && (
        <QuestionScreen
          key={nextQuestion.question}
          question={nextQuestion}
          onSubmit={(answer) => {
            dispatch({ type: 'store-answer', payload: answer })
          }}
        />
      )}
      {showResultScreen && (
        <CompletionScreen
          answerState={questionFlowState}
          questions={data}
          dispatch={dispatch}
        />
      )}
    </>
  )
}
