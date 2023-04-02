const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });
  module.exports = User; 