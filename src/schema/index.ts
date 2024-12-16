import Role from './role.model'
import Permission from './permission.model'
import Resource from './resource.model'
import SubResource from './subResource.model'

// Resource <-> Sub Resource HasMany Association
Resource.hasMany(SubResource, {
  foreignKey: 'resourceId',
  as: 'subResources',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

SubResource.belongsTo(Resource, {
  foreignKey: 'resourceId',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

export { Role, Permission, Resource, SubResource }
