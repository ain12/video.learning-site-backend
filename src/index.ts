import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db'
import routes from './routes'
import { createVideo } from './agents/videos/videoAgent'

dotenv.config()

const startDB = async () => {
    try {
        await connectDB()
        await createVideo({
            title: 'Example video',
            url: 'url',
            duration: 20,
            createdAt: new Date(),
        });
        
        const app = express()
        
        app.use(cors())
        app.use(express.json())
        
        app.use('/api', routes)
        
        app.get('/', (req, res) => res.send('Running'))
        
        const PORT = process.env.PORT || 5000
        
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))   
    } catch (error) {
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}

startDB()