import { calculatePoints } from './calculate-points'
import { QuestionFlowReducerState } from './question-flow-reducer'

describe('calculatePoints', () => {
  it('Works with good data', () => {
    const testData: QuestionFlowReducerState = {
      answers: {
        'a question': {
          answer: 'an answer',
          points: 5,
        },
        'another question': {
          answer: 'another answer',
          points: 5,
        },
      },
    }
    expect(calculatePoints(testData)).toEqual(10)
  })
})
