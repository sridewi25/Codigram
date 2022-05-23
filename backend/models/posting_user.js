'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posting_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      posting_user.belongsTo(models.user);
    }
  }
  posting_user.init({
    image: DataTypes.STRING,
    posting: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          message: 'Caption must not be empty'
        }
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posting_user',
  });
  return posting_user;
};