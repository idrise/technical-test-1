import { QuestionFlowReducerState } from './question-flow-reducer'

export function calculatePoints(state: QuestionFlowReducerState): number {
  return !state.answers
    ? 0
    : Object.values(state.answers).reduce(
        (acc, answer) => acc + answer.points,
        0,
      )
}
