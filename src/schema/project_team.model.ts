import connection from '../config/db'

import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

class ProjectTeam extends Model<
  InferAttributes<ProjectTeam>,
  InferCreationAttributes<ProjectTeam>
> {
  declare id: CreationOptional<number>
  declare projectId: number
  declare teamId: number
  declare entityId: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare createdBy: number
}

ProjectTeam.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    projectId: { type: DataTypes.INTEGER, allowNull: false },
    entityId: { type: DataTypes.INTEGER, allowNull: false },
    teamId: { type: DataTypes.INTEGER, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: connection, tableName: 'project_team' }
)

export default ProjectTeam
