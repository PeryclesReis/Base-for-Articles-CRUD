const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { description } = req.body;

  const newCategory = await createCategory(description);
  return res.status(newCategory.code).json(newCategory);
};

const listCategory = async (_req, res) => {
  const categories = await getCategory();
  return res.status(categories.code).json(categories);
};

const upCategory = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  const newCategory = await updateCategory(id, description);
  return res.status(201).json(newCategory);
};

const removeCategory = async (req, res) => {
  const { id } = req.params;

  const result = await deleteCategory(id);
  return res.status(201).json(result);
};

module.exports = {
  addCategory,
  listCategory,
  upCategory,
  removeCategory,
};
