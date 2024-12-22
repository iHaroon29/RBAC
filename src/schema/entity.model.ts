import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

import connection from '../config/db'

class Entity extends Model<
  InferAttributes<Entity>,
  InferCreationAttributes<Entity>
> {
  declare id: CreationOptional<number>
  declare entityName: string
  declare entityDescription: string
  declare createdBy: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

Entity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    entityName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Default Entity',
    },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    entityDescription: {
      type: DataTypes.TEXT('long'),
      defaultValue: 'Default Entity Description',
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
  { sequelize: connection, tableName: 'entities' }
)

export default Entity
