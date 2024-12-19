import { Router } from 'express'
import { createRole } from '../controller/role.controller'
import { validatePermissionLevel } from '../middleware/permission.middleware'

const resourceRouter = Router()

resourceRouter.post('/', createRole)

export default resourceRouter
