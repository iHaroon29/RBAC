import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from 'sequelize'
import connection from '../config/db'
import SubResource from './subResource.model'

class Resource extends Model<
  InferAttributes<Resource, { omit: 'subResources' }>,
  InferCreationAttributes<Resource, { omit: 'subResources' }>
> {
  declare id: CreationOptional<number>
  declare resourceName: string
  declare resourceDescription: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare subResources?: NonAttribute<SubResource[]>

  declare getSubResource: HasManyGetAssociationsMixin<SubResource>
  declare addSubResource: HasManyAddAssociationMixin<SubResource, number>
  declare addSubResources: HasManyAddAssociationsMixin<SubResource, number>
  declare setSubResources: HasManySetAssociationsMixin<SubResource, number>
  declare removeSubResource: HasManyRemoveAssociationMixin<SubResource, number>
  declare removeSubResources: HasManyRemoveAssociationsMixin<
    SubResource,
    number
  >
  declare hasSubResource: HasManyHasAssociationMixin<SubResource, number>
  declare hasSubResources: HasManyHasAssociationsMixin<SubResource, number>
  declare countSubResources: HasManyCountAssociationsMixin
  declare createSubResource: HasManyCreateAssociationMixin<
    SubResource,
    'resourceId'
  >

  declare static associations: {
    subResources: Association<Resource, SubResource>
  }
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    resourceName: { type: DataTypes.STRING, allowNull: false },
    resourceDescription: {
      type: DataTypes.STRING,
      defaultValue: 'Default Description',
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize: connection, tableName: 'resources' }
)

export default Resource
