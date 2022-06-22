const {
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} = require('../services/articleService');

const addArticle= async (req, res) => {
  const { title, description } = req.body;
  const { category } = req.params;

  const newCategory = await createArticle(title, description, category);
  return res.status(newCategory.code).json(newCategory);
};

const listArticle = async (_req, res) => {
  const articles = await getArticle();
  return res.status(articles.code).json(articles);
};

const upArticle = async (req, res) => {
  const { id } = req.params;
  const { title, description, categoryId } = req.body;

  const newArticle = await updateArticle(id, title, description, categoryId);
  return res.status(newArticle.code).json(newArticle);
};

const removeArticle = async (req, res) => {
  const { id } = req.params;

  const result = await deleteArticle(id);
  return res.status(result.code).json(result);
};

module.exports = {
  addArticle,
  listArticle,
  upArticle,
  removeArticle,
};
