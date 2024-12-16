import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'
import Role from './role.model'
import Resource from './resource.model'
import SubResource from './subResource.model'

class Permission extends Model<
  InferAttributes<Permission>,
  InferCreationAttributes<Permission>
> {
  declare id: CreationOptional<number>
  declare roleId: number
  declare resourceId: number
  declare subResourceId: number
  declare scope: string
  declare canRead: boolean
  declare canWrite: boolean
  declare canUpdate: boolean
  declare canDelete: boolean
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

Permission.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    roleId: { type: DataTypes.INTEGER, references: { key: 'id', model: Role } },
    resourceId: {
      type: DataTypes.INTEGER,
      references: { key: 'id', model: Resource },
    },
    subResourceId: {
      type: DataTypes.INTEGER,
      references: { key: 'id', model: SubResource },
    },
    scope: { type: DataTypes.STRING },
    canRead: { type: DataTypes.BOOLEAN, defaultValue: false },
    canWrite: { type: DataTypes.BOOLEAN, defaultValue: false },
    canUpdate: { type: DataTypes.BOOLEAN, defaultValue: false },
    canDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize: connection, tableName: 'permissions' }
)

export default Permission
