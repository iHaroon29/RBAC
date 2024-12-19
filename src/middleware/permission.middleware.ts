import { RequestHandler } from 'express'
import { Permission, Resource, Role, SubResource } from '../schema'

export const validatePermissionLevel = (
  isResource: boolean,
  leastRequiredPermissions: Array<string>
): RequestHandler<{ id: number }, {}, {}, {}, {}> => {
  return async (req, res, next) => {
    const { id } = req.params
    const route = req.url.trim().split('/')[1]
    const existingRole = await Role.findOne({
      where: { roleName: 'admin' },
      raw: true,
      attributes: ['id', 'roleName'],
    })
    const existingSubResource = await SubResource.findOne({
      where: { subResourceName: route },
      raw: true,
    })
    const existingPermissionLevel = await Permission.findOne({
      where: {
        roleId: existingRole?.id,
        resourceId: existingSubResource?.resourceId,
        subResourceId: existingSubResource?.id,
      },
      raw: true,
    })
    res.status(200).json({ message: 'ok' })
  }
}
