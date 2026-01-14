import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://makemoney.vercel.app'
    ]
  })
)

app.get('/health', (_, res) => {
  res.json({ ok: true })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`)
})
