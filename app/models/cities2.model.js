module.exports = (sequelize, Sequelize) => {
  const Cities2 = sequelize.define("cities2", {
    name: {
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.STRING
    },
  });
  return Cities2;
};