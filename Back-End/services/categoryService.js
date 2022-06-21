const { Category } = require('../app/models');

const createCategory = async (description) => {
  return {
    message: 'Categoria cadastrada com sucesso!',
    code: 200,
    result: await Category.create({ description }),
  };
};

const getOneCategory = async (id) => {
  return {
    message: 'Categoria encontrada',
    code: 200,
    result: await Category.findOne({ where: { id } }),
  };
};

const getCategory = async () => {
  return {
    message: 'Categorias',
    code: 200,
    result: await Category.findAll({}),
  };
};

const updateCategory = async (id, description) => {
  const { result } = await getOneCategory(id);

  if (!result) return {
    code: 204,
    message: 'Categoria não existe!',
  };

  return {
    message: 'Categoria atualizado com sucesso!',
    code: 201,
    result: await Category.update(
      { description },
      { where: { id } },
    ),
  };
};

const deleteCategory = async (id) => {
  const category = await getOneCategory(id);

  if (!category) return {
    code: 404,
    message: 'Categoria já foi removida!',
  };

  await Category.destroy({ where: { id } })

  return {
    code: 201,
    message: 'Categoria removida com sucesso!',
  };
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
