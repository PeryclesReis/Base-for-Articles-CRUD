const { Category } = require('../../../Back-End-old/src/models');

const createCategory = async (description) => {
  return Category.create({ description });
};

const getOneCategory = async (id) => {
  return Category.findByPK(id);
};

const getCategory = async () => {
  return Category.findAll({});
};

const updateCategory = async (id, description) => {
  return Category.update(
    { description },
    { where: { id } },
  );
};

const deleteCategory = async (id) => {
  const category = await getOneCategory(id);

  if (!category) return 'Categoria já foi removida!';

  return Category.destroy({ where: { id } });
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
