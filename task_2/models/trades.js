const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Trade = sequelize.define('trade', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: DataTypes.ENUM('buy', 'sell'),
  user_id: DataTypes.INTEGER,
  symbol: DataTypes.TEXT,
  shares: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  timestamp: DataTypes.INTEGER,
}, {
  timestamps: false,
});


module.exports = Trade;