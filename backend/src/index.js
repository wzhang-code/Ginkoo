import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { generateResearchSuggestions } from './routes/research.js'
import { searchCompetitions, getCompetitionDetail } from './routes/competition.js'
import { getMajorInfo } from './routes/major.js'
import { generateEssay } from './routes/essay.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Only PDF and DOCX files are allowed'))
    }
  }
})

app.post('/api/research/suggest', generateResearchSuggestions)
app.get('/api/competition/search', searchCompetitions)
app.get('/api/competition/:id', getCompetitionDetail)
app.get('/api/major/:name', getMajorInfo)
app.post('/api/essay/generate', upload.single('cv'), generateEssay)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
