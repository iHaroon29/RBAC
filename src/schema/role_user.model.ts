import connection from '../config/db'

import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

class RoleUser extends Model<
  InferAttributes<RoleUser>,
  InferCreationAttributes<RoleUser>
> {
  declare id: CreationOptional<number>
  declare roleId: number
  declare userId: number
  declare entityId: number
  declare createdBy: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

RoleUser.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    roleId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    entityId: { type: DataTypes.INTEGER, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: connection, tableName: 'role_user' }
)

export default RoleUser
