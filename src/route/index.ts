import { Router } from 'express'
import resourceRouter from './role.route'
import roleRouter from './resource.route'

const indexRouter = Router()

indexRouter.use('/resources', resourceRouter)
indexRouter.use('/roles', roleRouter)
// indexRouter.use('/validate', (req, res, next) =>
//   res.status(200).json({ message: 'oka' })
// )

export default indexRouter
