import connection from '../config/db'

import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

class RoleUser extends Model<
  InferAttributes<RoleUser>,
  InferCreationAttributes<RoleUser>
> {
  declare id: number
  declare roleId: number
  declare userId: number
  declare entityId: number
  declare scope: string
  declare createdBy: number
  declare createdAt: Date
  declare updatedAt: Date
}

RoleUser.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    roleId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    entityId: { type: DataTypes.INTEGER, allowNull: false },
    scope: { type: DataTypes.STRING, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: connection, tableName: 'role_user' }
)

export default RoleUser
