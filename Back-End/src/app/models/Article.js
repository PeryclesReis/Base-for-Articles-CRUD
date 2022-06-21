module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titles: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  Article.associate = ({ Category }) => {
    Article.belongsTo(Category,
      { foreignKey: 'categoryId', as: 'category' });
  };

  return Article;
};