module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

  Article.associate = ({ Category }) => {
    Article.belongsTo(Category,{
      foreignKey: 'categoryId', as: 'categories'
    });
  };

  return Article;
};