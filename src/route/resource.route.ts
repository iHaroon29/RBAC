import { Router } from 'express'

const resourceRouter = Router()

resourceRouter.post('/', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})
resourceRouter.get('/', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})
resourceRouter.patch('/:id', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})
resourceRouter.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})

export default resourceRouter
