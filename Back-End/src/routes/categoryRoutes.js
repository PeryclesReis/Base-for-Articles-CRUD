const express = require('express');
const controller = require('../controllers/categoryController');

const router = express.Router();

router.post('/create', controller.addCategory);
router.get('/list', controller.listCategory);
router.update('/update', controller.upCategory);
router.delete('/remove', controller.removeCategory);

module.exports = router;