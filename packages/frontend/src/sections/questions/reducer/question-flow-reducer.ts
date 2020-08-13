export interface QuestionFlowReducerState {
  name?: string
  answers?: {
    [question: string]: {
      answer: string
      points: number
    }
  }
  totalScore?: number
}

export type QuestionFlowReducerDispatch = (
  questionFlow: QuestionFlowReducerState,
  action: QuestionFlowReducerAction,
) => QuestionFlowReducerState

export type QuestionFlowReducerAction =
  | {
      type: 'store-answer'
      payload: { question: string; answer: string; points: number }
    }
  | {
      type: 'store-name'
      payload: { name: string }
    }
  | {
      type: 'clear-answers'
    }

export function questionFlowReducer(
  questionFlow: QuestionFlowReducerState,
  action: QuestionFlowReducerAction,
): QuestionFlowReducerState {
  if (action.type === 'store-answer') {
    return {
      ...questionFlow,
      answers: {
        ...questionFlow.answers,
        [action.payload.question]: {
          answer: action.payload.answer,
          points: action.payload.points,
        },
      },
    }
  }
  if (action.type === 'store-name') {
    return { ...questionFlow, name: action.payload.name }
  }
  if (action.type === 'clear-answers') {
    return { ...questionFlow, answers: {} }
  }
  return questionFlow
}
