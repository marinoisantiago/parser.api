const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
  }
);

const Activity = sequelize.define('activity', {
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
      primaryKey: false
    },
    analysis: {
      type: Sequelize.TEXT,
      allowNull: false,
      primaryKey: false
    }
  }, {
    freezeTableName: true, 
    timestamps: false,
  });

Activity.removeAttribute('id')
Activity.sync();

module.exports = Activity;
