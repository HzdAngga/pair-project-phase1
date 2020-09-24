'use strict';
const {
  Model
} = require('sequelize');

const { encrypt } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Game,{through: models.Subscribe})
    }
    fullname() {
      return `${this.firstName} ${this.lastName}`
    }
  };
  User.init({
    firstName: {type: DataTypes.STRING, validate:{notEmpty:true}},
    lastName: {type: DataTypes.STRING, validate:{notEmpty:true}},
    email: {type: DataTypes.STRING, validate:{notEmpty:true}},
    password: {type: DataTypes.STRING, validate:{notEmpty:true}}
  }, {
    hooks:{
      beforeCreate: (instance,opt)=>{
        instance.password = encrypt(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};