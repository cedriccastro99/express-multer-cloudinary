import 'dotenv/config';
import express from 'express'

import fileRouter from './routes/file.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use('/api/files', fileRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
