import { validateQuestionCsvJson } from './validate-question-csv-json'

describe('remapQuestions', () => {
  it('Remaps a good CSV', async () => {
    const data = [
      {
        '0 points': 'everyday',
        '2 points': 'three times a week',
        '4 points': 'twice a week',
        '6 points': 'once a week',
        Question: 'How often do you drink?',
      },
    ]
    expect(validateQuestionCsvJson(data)).toEqual(true)
  })
  it('Fails validation on extra field', async () => {
    const data = [
      {
        '0 points': 'everyday',
        '1 points': 'smithy',
        '2 points': 'three times a week',
        '4 points': 'twice a week',
        '6 points': 'once a week',
        Question: 'How often do you drink?',
      },
    ]
    expect(validateQuestionCsvJson(data)).toEqual(false)
  })
  it('Fail validation on missing field', async () => {
    const data = [
      {
        '0 points': 'everyday',
        '4 points': 'twice a week',
        '6 points': 'once a week',
        Question: 'How often do you drink?',
      },
    ]
    expect(validateQuestionCsvJson(data)).toEqual(false)
  })
})
