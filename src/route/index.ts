import { Router } from 'express'
import roleRouter from './role.route'
import resourceRouter from './resource.route'

const indexRouter = Router()

indexRouter.use('/role', roleRouter)
indexRouter.use('/resource', resourceRouter)

export default indexRouter
