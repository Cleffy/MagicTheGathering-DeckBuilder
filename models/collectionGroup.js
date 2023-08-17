const{Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
class CollectionGroup extends Model{}


CollectionGroup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        card_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'card',
                key: 'id',
            },
        },
        collection_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'collection',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collection_group',
    },
);

module.exports = CollectionGroup