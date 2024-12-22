interface RoleDTO {
  roleName: string
  roleDescription?: string
  dashboardType: 'admin' | 'power' | 'normal' | 'guest'
  resourceCollection: Array<ResourcePermissionCollection>
  scopeType:
    | 'global'
    | 'resource'
    | 'subResource'
    | 'entity'
    | 'subResource'
    | 'user'
  scopeValue: string
}

interface ResourcePermissionCollection {
  resourceId: number
  subResourcePermissionCollection: Array<SubResourcePermission>
}

interface SubResourcePermission {
  subResourceId: number
  permissionCollection: PermissionCollection
}

interface PermissionCollection {
  canRead: boolean
  canWrite: boolean
  canUpdate: boolean
  canDelete: boolean
}

export {
  PermissionCollection,
  ResourcePermissionCollection,
  RoleDTO,
  SubResourcePermission,
}
