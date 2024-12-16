import Role from './role.model'
import Permission from './permission.model'
import Resource from './resource.model'
import SubResource from './subResource.model'

// Resource <-> Sub Resource HasMany Association
Resource.hasMany(SubResource)
SubResource.belongsTo(Resource, { foreignKey: 'resourceId' })

export { Role, Permission, Resource, SubResource }
