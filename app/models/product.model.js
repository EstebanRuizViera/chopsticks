module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Products", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    price: Sequelize.FLOAT(7, 2),
    type: Sequelize.STRING,
    image: Sequelize.STRING
  });

  return Product;
};