import { getQuestionsFromCsv } from './get-questions-from-csv'
import path from 'path'

describe('getQuestionsFromCsv', () => {
  it('Remaps a good CSV', async () => {
    expect(await getQuestionsFromCsv(path.join(__dirname, 'testdata/good.csv')))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "answers": Array [
            Object {
              "answer": "once a week",
              "points": 6,
            },
            Object {
              "answer": "twice a week",
              "points": 4,
            },
            Object {
              "answer": "three times a week",
              "points": 2,
            },
            Object {
              "answer": "everyday",
              "points": 0,
            },
          ],
          "question": "How often do you drink?",
        },
        Object {
          "answers": Array [
            Object {
              "answer": "1 unit",
              "points": 6,
            },
            Object {
              "answer": "3 units",
              "points": 4,
            },
            Object {
              "answer": "6 units",
              "points": 2,
            },
            Object {
              "answer": "12 units",
              "points": 0,
            },
          ],
          "question": "How much do you drink per week?",
        },
        Object {
          "answers": Array [
            Object {
              "answer": "10 pounds",
              "points": 6,
            },
            Object {
              "answer": "20 pounds",
              "points": 4,
            },
            Object {
              "answer": "30 pounds",
              "points": 2,
            },
            Object {
              "answer": "50 pounds",
              "points": 0,
            },
          ],
          "question": "How much do you spend on alcohol per week?",
        },
        Object {
          "answers": Array [
            Object {
              "answer": "never",
              "points": 6,
            },
            Object {
              "answer": "most of the time",
              "points": 4,
            },
            Object {
              "answer": "occasionally",
              "points": 2,
            },
            Object {
              "answer": "always",
              "points": 0,
            },
          ],
          "question": "Do you drink alone?",
        },
      ]
    `)
  })
  it('Throws on extra field', async () => {
    expect.assertions(1)
    try {
      await getQuestionsFromCsv(
        path.join(__dirname, 'testdata/additional-field.csv'),
      )
    } catch (e) {
      expect(e).toMatchInlineSnapshot(
        `[Error: CSV Format does not match schema]`,
      )
    }
  })
  it('Throws on missing field', async () => {
    expect.assertions(1)
    try {
      await getQuestionsFromCsv(
        path.join(__dirname, 'testdata/missing-field.csv'),
      )
    } catch (e) {
      expect(e).toMatchInlineSnapshot(
        `[Error: CSV Format does not match schema]`,
      )
    }
  })
})
