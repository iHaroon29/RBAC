import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: number
  declare name: string
  declare email: string
  declare password: string
  declare entityId: number
  declare createdBy: number
  declare createdAt: Date
  declare updatedAt: Date
}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    entityId: { type: DataTypes.INTEGER, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: connection, tableName: 'users' }
)

export default User
