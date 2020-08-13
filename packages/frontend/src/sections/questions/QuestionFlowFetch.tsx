import React from 'react'
import useAxios from 'axios-hooks'
import { Question } from './screens/QuestionScreen'
import { QuestionFlow } from './QuestionFlow'

export function QuestionFlowFetch() {
  const [{ data, loading, error }] = useAxios('/questions')

  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>Failed to reach server.</p>
  }

  return <QuestionFlow data={data as Question[]} />
}
