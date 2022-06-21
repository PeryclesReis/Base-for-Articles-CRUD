const express = require('express');
const controller = require('../controllers/categoryController');

const router = express.Router();

router.post('/create', controller.addCategory);
router.get('/list', controller.listCategory);
router.put('/update/:id', controller.upCategory);
router.delete('/remove/:id', controller.removeCategory);

module.exports = router;