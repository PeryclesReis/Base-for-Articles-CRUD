const {
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} = require('../services/articleService');

const addArticle= async (req, res) => {
  const { title, description } = req.body;
  const { category } = req.params;

  try {
    const newCategory = await createArticle(title, description, category);

    return res.status(newCategory.code).json(newCategory);
  } catch (err) {
    console.log(err);
  }
};

const listArticle = async (_req, res) => {
  try {
    const articles = await getArticle();

    return res.status(articles.code).json(articles);
  } catch (err) {
    console.log(err);
  }
};

const upArticle = async (req, res) => {
  const { id } = req.params;
  const { title, description, categoryId } = req.body;

  try {
    const newArticle = await updateArticle(id, title, description, categoryId);

    return res.status(newArticle.code).json(newArticle);
  } catch (err) {
    console.log(err);
  }
};

const removeArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteArticle(id);

    return res.status(result.code).json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addArticle,
  listArticle,
  upArticle,
  removeArticle,
};
