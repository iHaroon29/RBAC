import { Router } from 'express'

const roleRouter = Router()

roleRouter.post('/', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})
roleRouter.get('/', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})
roleRouter.patch('/:id', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})
roleRouter.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'OK' })
})

export default roleRouter
