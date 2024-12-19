import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class TeamUser extends Model<
  InferAttributes<TeamUser>,
  InferCreationAttributes<TeamUser>
> {
  declare id: number
  declare teamId: number
  declare userId: number
  declare entityId: number
  declare createdBy: number
  declare createdAt: Date
  declare updatedAt: Date
}

TeamUser.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    teamId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    entityId: { type: DataTypes.INTEGER, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: connection, tableName: 'team_user' }
)

export default TeamUser
