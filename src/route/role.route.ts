import { Router } from 'express'
import { createResource, getResources } from '../controller/resource.controller'
import { validatePermissionLevel } from '../middleware/permission.middleware'

const roleRouter = Router()

roleRouter.post('/', createResource)

roleRouter.get('/', getResources)

roleRouter.get(
  '/test/:id',
  validatePermissionLevel(false, ['read']),
  getResources
)

// roleRouter.patch('/:id', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })
// roleRouter.delete('/:id', (req, res, next) => {
//   res.status(200).json({ message: 'OK' })
// })

export default roleRouter
