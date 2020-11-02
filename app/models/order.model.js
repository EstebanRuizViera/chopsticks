module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("Orders", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    total: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
  });

  return Order;
};