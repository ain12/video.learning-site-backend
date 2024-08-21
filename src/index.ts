import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Running'))

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
