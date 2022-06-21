module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: DataTypes.STRING,
  },
);

  // Category.associate = ({ Article }) => {
  //   Category.hasMany(Article,
  //     { foreignKey: 'categoryId', as: 'article' });
  // };

  return Category;
};
