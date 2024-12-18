import { Router } from 'express'
import roleRouter from './role.route'
import resourceRouter from './resource.route'

const indexRouter = Router()

indexRouter.use('/role', roleRouter)
indexRouter.use('/resource', resourceRouter)
// indexRouter.use('/validate', (req, res, next) =>
//   res.status(200).json({ message: 'oka' })
// )

export default indexRouter
