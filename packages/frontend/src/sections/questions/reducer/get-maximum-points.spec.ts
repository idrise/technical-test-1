import { getMaximumPoints } from './get-maximum-points'
import { Question } from '../screens/QuestionScreen'

describe('getMaximumPoints', () => {
  it('Gets the maximum points from sample questions', () => {
    const testData: Question[] = [
      {
        question: 'How often do you drink?',
        answers: [
          { answer: 'once a week', points: 6 },
          { answer: 'twice a week', points: 4 },
          { answer: 'three times a week', points: 2 },
          { answer: 'everyday', points: 0 },
        ],
      },
      {
        question: 'How much do you drink per week?',
        answers: [
          { answer: '1 unit', points: 6 },
          { answer: '3 units', points: 4 },
          { answer: '6 units', points: 2 },
          { answer: '12 units', points: 0 },
        ],
      },
    ]

    expect(getMaximumPoints(testData)).toEqual(12)
  })
})
