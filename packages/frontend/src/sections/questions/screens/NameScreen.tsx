import React, { useState } from 'react'
import { Heading } from '../../../components/Heading'
import { TextField } from '@material-ui/core'
import { QuestionFlowReducerAction } from '../reducer/question-flow-reducer'
import { SubmitButton } from '../../../components/SubmitButton'

interface NameScreenProps {
  dispatch: React.Dispatch<QuestionFlowReducerAction>
  name?: string
}

export function NameScreen(props: NameScreenProps) {
  const [name, setName] = useState(props.name || '')
  return (
    <>
      <Heading text="Welcome to OYNB!!" />

      <TextField
        fullWidth
        id="standard-basic"
        label="Name"
        defaultValue={props.name}
        onChange={(e) => setName(e.target.value)}
      />
      <SubmitButton
        onClick={() =>
          props.dispatch({
            type: 'store-name',
            payload: { name: name },
          })
        }
      >
        Next
      </SubmitButton>
    </>
  )
}
