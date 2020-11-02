module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Products", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM("tipo1", "tipo2", "tipo3"),
      allowNull: false
    },
    price: Sequelize.FLOAT(7, 2),
    description: Sequelize.STRING,
    image: Sequelize.STRING
  });

  return Product;
};