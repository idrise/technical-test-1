import express from 'express'
import { questionRouter } from './routes/questions'

const app = express()
const port = process.env.PORT || 3001

app.use(questionRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
