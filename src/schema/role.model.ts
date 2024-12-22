import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
  declare id: CreationOptional<number>
  declare roleName: string
  declare roleDescription: string
  declare dashboardType: 'admin' | 'power' | 'normal' | 'guest'
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    roleName: { type: DataTypes.STRING, allowNull: false },
    dashboardType: { type: DataTypes.STRING, defaultValue: 'guest' },
    roleDescription: {
      type: DataTypes.STRING,
      defaultValue: 'Default Description',
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize: connection, tableName: 'roles' }
)

export default Role
