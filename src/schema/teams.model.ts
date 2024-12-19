import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

import connection from '../config/db'

class Team extends Model<InferAttributes<Team>, InferCreationAttributes<Team>> {
  declare id: CreationOptional<number>
  declare teamName: string
  declare teamDescription: string
  declare createdBy: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare visiblity: boolean
  declare entityId: number
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Default Team',
    },
    entityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    teamDescription: {
      type: DataTypes.TEXT('long'),
      defaultValue: 'Default Team Description',
    },
    visiblity: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize: connection, tableName: 'teams' }
)

export default Team
