import { Router } from 'express'
import { createRole } from '../controller/role.controller'

const resourceRouter = Router()

resourceRouter.post('/', createRole)

// resourceRouter.get('/', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })
// resourceRouter.patch('/:id', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })
// resourceRouter.delete('/:id', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })

export default resourceRouter
