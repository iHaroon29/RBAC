import { RequestHandler } from 'express'
import { RoleDTO } from '../dto/role.dto'
import { Permission, Role } from '../schema'

export const createRole: RequestHandler<
  {},
  {},
  { roleInfo: RoleDTO },
  {},
  {}
> = async (req, res) => {
  try {
    const { roleInfo } = req.body
    const {
      resourceCollection,
      roleName,
      roleDescription,
      dashboardType,
      scopeType,
      scopeValue,
    } = roleInfo

    const newRole = await Role.create({
      roleName,
      roleDescription: roleDescription ?? 'Default Role Description',
      dashboardType,
    })

    for await (const {
      resourceId,
      subResourcePermissionCollection,
    } of resourceCollection) {
      for await (const {
        permissionCollection,
        subResourceId,
      } of subResourcePermissionCollection) {
        await Permission.create({
          resourceId,
          subResourceId,
          canWrite: permissionCollection.canWrite,
          canDelete: permissionCollection.canDelete,
          canRead: permissionCollection.canRead,
          canUpdate: permissionCollection.canUpdate,
          roleId: newRole.id,
        })
      }
    }
    res.status(200).json({ message: 'ok' })
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
export const getAllRoles: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
export const updateRole: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
export const DeleteRole: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
