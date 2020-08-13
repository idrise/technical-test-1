import React, { useState } from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { Heading } from '../../../components/Heading'
import { SubmitButton } from '../../../components/SubmitButton'

export interface Answer {
  answer: string
  points: number
}
export interface Question {
  question: string
  answers: Answer[]
}
export interface QuestionProps {
  question: Question
  onSubmit: (answer: any) => void
  answer?: string
}

function findAnswer(question: Question, answer: string): Answer | undefined {
  return question.answers.find((findAnswer) => findAnswer.answer === answer)
}

export function QuestionScreen(props: QuestionProps) {
  const [answer, setAnswer] = useState<undefined | string>(props.answer)
  const { question } = props
  return (
    <>
      <Heading text={question.question} />
      <RadioGroup
        aria-label={question.question}
        name={question.question}
        defaultValue={props.answer}
        onChange={(e) => setAnswer(e.target.value)}
      >
        {question.answers.map((answer) => (
          <FormControlLabel
            key={answer.answer}
            value={answer.answer}
            control={<Radio />}
            label={answer.answer}
          />
        ))}
      </RadioGroup>
      <SubmitButton
        onClick={() =>
          props.onSubmit({
            question: question.question,
            ...findAnswer(question, answer as string),
          })
        }
      >
        Next
      </SubmitButton>
    </>
  )
}
