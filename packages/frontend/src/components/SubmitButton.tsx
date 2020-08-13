import React from 'react'
import { Button } from '@material-ui/core'

interface SubmitButton {
  onClick: () => void
  children: React.ReactNode
}

export function SubmitButton(props: SubmitButton) {
  return (
    <div
      style={{ paddingTop: '1em', display: 'flex', justifyContent: 'flex-end' }}
    >
      <Button variant="outlined" color="primary" onClick={props.onClick}>
        {props.children}
      </Button>
    </div>
  )
}
