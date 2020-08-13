import { csvToJson } from './csvToJson'
import path from 'path'

describe('csvToJson', () => {
  it('Reads a valid csv and outputs json', async () => {
    const actual = await csvToJson(
      path.join(__dirname, 'questions/testdata/good.csv'),
    )

    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "0 points": "everyday",
          "2 points": "three times a week",
          "4 points": "twice a week",
          "6 points": "once a week",
          "Question": "How often do you drink?",
        },
        Object {
          "0 points": "12 units",
          "2 points": "6 units",
          "4 points": "3 units",
          "6 points": "1 unit",
          "Question": "How much do you drink per week?",
        },
        Object {
          "0 points": "50 pounds",
          "2 points": "30 pounds",
          "4 points": "20 pounds",
          "6 points": "10 pounds",
          "Question": "How much do you spend on alcohol per week?",
        },
        Object {
          "0 points": "always",
          "2 points": "occasionally",
          "4 points": "most of the time",
          "6 points": "never",
          "Question": "Do you drink alone?",
        },
      ]
    `)
  })
  it('When a file is missing throws an error', async () => {
    await expect(
      csvToJson(path.join(__dirname, 'questions/testdata/doesntexist.csv')),
    ).rejects.toBeTruthy()
  })
})
