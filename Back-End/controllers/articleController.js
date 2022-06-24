const {
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
  getOneArticle,
  getArticlesByCategory,
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

const article = async (req, res) => {
  const { id } = req.params;

  const result = await getOneArticle(id);
  return res.status(result.code).json(result);
};

const articlesByCategory = async (req, res) => {
  const { category } = req.params;

  const result = await getArticlesByCategory(category);
  return res.status(200).json(result);
};

const upArticle = async (req, res) => {
  const { id } = req.params;

  const newArticle = await updateArticle(id, req.body);
  return res.status(newArticle.code).json(newArticle);
};

const removeArticle = async (req, res) => {
  const { id } = req.params;

  const result = await deleteArticle(id);
  return res.status(result.code).json(result);
};

module.exports = {
  article,
  addArticle,
  listArticle,
  articlesByCategory,
  upArticle,
  removeArticle,
};
