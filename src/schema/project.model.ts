import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class Project extends Model<
  InferAttributes<Project>,
  InferCreationAttributes<Project>
> {
  declare id: CreationOptional<number>
  declare projectName: string
  declare projectDescription: string
  declare createdBy: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare entityId: number
}

Project.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    projectName: { type: DataTypes.STRING, allowNull: false },
    projectDescription: {
      type: DataTypes.TEXT('long'),
      defaultValue: 'Default Project Description',
    },
    entityId: { type: DataTypes.INTEGER, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: connection, tableName: 'projects' }
)

export default Project
