import Express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './route'

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(morgan('combined'))

// Route Collection
app.use('/api/v1', indexRouter)

export default app
