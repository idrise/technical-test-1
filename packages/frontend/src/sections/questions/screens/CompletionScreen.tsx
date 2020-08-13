import React from 'react'
import { Question } from './QuestionScreen'
import {
  QuestionFlowReducerState,
  QuestionFlowReducerAction,
} from '../reducer/question-flow-reducer'
import { calculatePoints } from '../reducer/calculate-points'
import { getMaximumPoints } from '../reducer/get-maximum-points'
import { Heading } from '../../../components/Heading'
import { SubmitButton } from '../../../components/SubmitButton'

export interface CompletionScreenProps {
  questions: Question[]
  answerState: QuestionFlowReducerState
  dispatch: React.Dispatch<QuestionFlowReducerAction>
}
export function CompletionScreen(props: CompletionScreenProps) {
  return (
    <>
      <Heading text={`Thank you, ${props.answerState.name}!!`} />
      <p>
        {`You scored ${calculatePoints(
          props.answerState,
        )} points out of ${getMaximumPoints(props.questions)} possible.`}
      </p>
      <SubmitButton onClick={() => props.dispatch({ type: 'clear-answers' })}>
        Try again
      </SubmitButton>
    </>
  )
}
