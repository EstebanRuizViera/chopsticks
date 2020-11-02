module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("Clients", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    direction: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.INTEGER(9),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });

  return Client;
};