const express = require('express');
const controller = require('../controllers/categoryController');

const router = express.Router();

router.get('/', controller.listCategory);
router.post('/create', controller.addCategory);
router.put('/update/:id', controller.upCategory);
router.delete('/remove/:id', controller.removeCategory);

module.exports = router;