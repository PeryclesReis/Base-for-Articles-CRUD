const { Category } = require('../app/models');

const createCategory = async (description) => {
  return {
    message: 'Categoria cadastrada com sucesso!',
    result: await Category.create({ description }),
    code: '200'
  };
};

const getOneCategory = async (id) => {
  return {
    message: 'Categoria encontrada',
    result: await Category.findOne({ where: { id } }),
    code: '200'
  };
};

const getCategory = async () => {
  return {
    message: 'Categorias',
    result: await Category.findAll({}),
    code: '200'
  };
};

const updateCategory = async (id, description) => {
  const { result } = await getOneCategory(id);

  if (!result) return {
    message: 'Categoria não existe!',
    code: '204'
  };

  return {
    message: 'Categoria atualizado com sucesso!',
    result: await Category.update(
      { description },
      { where: { id } },
    ),
    code: '201'
  };
};

const deleteCategory = async (id) => {
  const category = await getOneCategory(id);

  if (!category) return {
    message: 'Categoria já foi removida!',
    code: '404'
  };

  await Category.destroy({ where: { id } })

  return {
    message: 'Categoria removida com sucesso!',
    code: '201'
  };
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
