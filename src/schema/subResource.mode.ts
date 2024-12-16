import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import connection from '../config/db'

class SubResource extends Model<
  InferAttributes<SubResource>,
  InferCreationAttributes<SubResource>
> {
  declare id: CreationOptional<number>
  declare subResourceName: string
  declare subResourceDescription: string
  declare visibility: 'public' | 'private'
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

SubResource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    subResourceName: { type: DataTypes.STRING, allowNull: false },
    subResourceDescription: {
      type: DataTypes.STRING,
      defaultValue: 'Default Description',
    },
    visibility: { type: DataTypes.STRING, defaultValue: 'private' },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize: connection, tableName: 'subResources' }
)

export default SubResource
