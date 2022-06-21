const { Article } = require('../app/models');

const createArticle = async (title, description, id) => {
  return {
    message: 'Artigo cadastrada com sucesso!',
    code: 200,
    result: await Article.create({ title, description, categoryId: id }),
  };
};

const getOneArticle = async (id) => {
  return {
    message: 'Artigos encontrada',
    code: 200,
    result: await Article.findOne({ where: { id } }),
  };
};

const getArticle = async () => {
  return {
    message: 'Articles',
    code: 200,
    result: await Article.findAll({}),
  };
};

const updateArticle = async (id, title, description, category) => {
  const { result } = await getOneArticle(id);

  if (!result) return {
    code: 204,
    message: 'Artigo não existe!',
  };

  return {
    message: 'Artigo atualizado com sucesso!',
    code: 201,
    result: await Article.update(
      { title, description, categoryId: category },
      { where: { id } },
    ),
  };
};

const deleteArticle = async (id) => {
  const article = await getOneArticle(id);

  if (!article) return {
    code: 404,
    message: 'Artigo já foi removida!',
  };

  await Article.destroy({ where: { id } })

  return {
    code: 201,
    message: 'Artigo removida com sucesso!',
  };
};

module.exports = {
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
};
