import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class Permission extends Model<
  InferAttributes<Permission>,
  InferCreationAttributes<Permission>
> {
  declare id: CreationOptional<number>
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
