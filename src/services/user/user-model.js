'use strict';

// user-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const user = sequelize.define('users', {
    facebookId: {
      type: Sequelize.STRING,
      allowNull: true
    },
  }, {
    freezeTableName: true
  });

  user.sync();

  return user;
};
