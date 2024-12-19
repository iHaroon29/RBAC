import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class Decision extends Model<
  InferAttributes<Decision>,
  InferCreationAttributes<Decision>
> {
  declare id: CreationOptional<number>
  declare decisionName: string
  declare decisionDescription: string
  declare createdBy: number
  declare createdAt: Date
  declare updatedAt: Date
  declare visiblity: boolean
  declare entityId: number
}

Decision.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    decisionName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Default Decision',
    },
    entityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    decisionDescription: {
      type: DataTypes.TEXT('long'),
      defaultValue: 'Default Decision Description',
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
  { sequelize: connection, tableName: 'decisions' }
)

export default Decision
