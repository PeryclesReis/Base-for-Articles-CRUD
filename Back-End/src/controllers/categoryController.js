const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { description } = req;

  try {
    const newCategory = await createCategory(description);

    return res.status(201).json(newCategory);
  } catch (err) {
    console.log('Algo deu errado: ' `${err}`);
  }
};

const listCategory = async (_req, res) => {
  try {
    const categories = await getCategory();

    return res.status(200).json(categories);
  } catch (err) {
    console.log('Algo deu errado: ' `${err}`);
  }
};

const upCategory = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const newCategory = await updateCategory(id, description);

    return res.status(201).json(newCategory);
  } catch (err) {
    console.log('Algo deu errado: ' `${err}`);
  }
};

const removeCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteCategory(id);

    return res.status(201).json('Removido com sucesso!');
  } catch (err) {
    console.log('Algo deu errado: ' `${err}`);
  }
};

module.exports = {
  addCategory,
  listCategory,
  upCategory,
  removeCategory,
};
