import { Router } from 'express'
import { createResource } from '../controller/resource.controller'

const roleRouter = Router()

roleRouter.post('/', createResource)

// roleRouter.get('/', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })
// roleRouter.patch('/:id', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })
// roleRouter.delete('/:id', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })

export default roleRouter
