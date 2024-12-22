import { RequestHandler } from 'express'
import User from '../schema/user.model'
import UserDTO from '../dto/user.dto'
import { Role } from '../schema'
import RoleUser from '../schema/role_user.model'

export const createUser: RequestHandler<
  {},
  {},
  {
    name: string
    email: string
    password: string
    entityId: number
    createdBy: number
  },
  {},
  {}
> = async (req, res) => {
  try {
    const { name, email, password, entityId, createdBy } = req.body
    const newUser = await User.create({
      name,
      email,
      password,
      entityId,
      createdBy,
    })
    res.status(200).json({ message: 'ok', data: newUser })
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}

export const assignRole: RequestHandler<
  {},
  {},
  { userId: number; roleId: number; entityId: number },
  {},
  {}
> = async (req, res) => {
  try {
    const { userId, roleId, entityId } = req.body
    const user = await User.findByPk(userId)
    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    }
    const role = await Role.findByPk(roleId)
    if (!role) {
      res.status(404).json({ message: 'Role not found' })
      return
    }
    await RoleUser.findOne({ where: { userId, roleId } })
    if (user) {
      res.status(400).json({ message: 'Role already assigned to user' })
      return
    }
    await RoleUser.create({ userId, roleId, entityId, createdBy: 1 })
    res.status(200).json({ message: 'ok' })
  } catch (e) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
    return
  }
}
